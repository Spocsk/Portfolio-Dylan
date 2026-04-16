#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import sys
from pathlib import Path


IGNORE_DIRS = {
    ".git",
    ".next",
    "node_modules",
    "dist",
    "build",
    "coverage",
    ".turbo",
}

TEXT_EXTENSIONS = {
    ".ts",
    ".tsx",
    ".js",
    ".jsx",
    ".mjs",
    ".cjs",
    ".json",
    ".md",
    ".mdx",
    ".txt",
    ".env",
    ".yml",
    ".yaml",
}

IGNORE_FILENAMES = {
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "bun.lock",
    "bun.lockb",
}

SEO_PATTERNS = [
    "app/layout.",
    "app/page.",
    "app/robots.",
    "app/sitemap.",
    "app/manifest.",
    "opengraph-image",
    "twitter-image",
    "next.config.",
    "robots.txt",
    "sitemap.xml",
]

DOMAIN_RE = re.compile(r"https?://[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:/[^\s\"')]+)?")


def iter_files(root: Path):
    for path in root.rglob("*"):
        if any(part in IGNORE_DIRS for part in path.parts):
            continue
        if path.is_file():
            yield path


def read_text(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8")
    except Exception:
        return ""


def detect_framework(root: Path) -> list[str]:
    frameworks: list[str] = []
    package_json = root / "package.json"
    if package_json.exists():
        try:
            data = json.loads(package_json.read_text(encoding="utf-8"))
        except Exception:
            data = {}
        deps = {
            **data.get("dependencies", {}),
            **data.get("devDependencies", {}),
        }
        for name in ("next", "react", "vue", "astro", "gatsby", "nuxt", "svelte", "vite"):
            if name in deps:
                frameworks.append(name)
    return frameworks


def detect_site_shape(root: Path) -> str:
    app_routes = list(root.glob("app/**/page.*"))
    pages_routes = list(root.glob("pages/**/*.*"))
    if len(app_routes) <= 1 and not pages_routes:
        return "likely one-page or shallow site"
    if len(app_routes) > 1 or pages_routes:
        return "likely multi-page site"
    return "unknown"


def collect_matching_files(root: Path) -> list[Path]:
    matches: list[Path] = []
    for path in iter_files(root):
        normalized = str(path.relative_to(root))
        if any(pattern in normalized for pattern in SEO_PATTERNS):
            matches.append(path)
    return sorted(matches)


def collect_routes(root: Path) -> list[str]:
    routes: list[str] = []
    for path in sorted(root.glob("app/**/page.*")):
        rel = path.relative_to(root)
        parts = list(rel.parts[1:-1])
        route = "/" + "/".join(parts)
        routes.append(route if route != "/" else "/")
    return routes


def collect_candidate_domains(root: Path) -> list[str]:
    candidates: set[str] = set()
    for path in iter_files(root):
        if path.name in IGNORE_FILENAMES:
            continue
        rel = path.relative_to(root)
        top_level = rel.parts[0] if rel.parts else ""
        if top_level not in {
            "app",
            "pages",
            "src",
            "components",
            "content",
            "lib",
            "public",
        } and path.name not in {
            "README.md",
            "README",
            "next.config.js",
            "next.config.mjs",
            "next.config.ts",
            ".env",
            ".env.local",
            ".env.production",
        }:
            continue
        if path.suffix not in TEXT_EXTENSIONS and path.name not in {"README", "Dockerfile"}:
            continue
        content = read_text(path)
        for match in DOMAIN_RE.findall(content):
            candidates.add(match.rstrip(".,);"))
    return sorted(candidates)


def main() -> int:
    root = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path.cwd().resolve()
    if not root.exists():
        print(f"[ERROR] Path not found: {root}")
        return 1

    frameworks = detect_framework(root)
    routes = collect_routes(root)
    matching_files = collect_matching_files(root)
    domains = collect_candidate_domains(root)

    print(f"Root: {root}")
    print(f"Frameworks: {', '.join(frameworks) if frameworks else 'unknown'}")
    print(f"Site shape: {detect_site_shape(root)}")
    print("")

    print("Routes:")
    if routes:
        for route in routes:
            print(f"- {route}")
    else:
        print("- none detected from app/**/page.*")
    print("")

    print("SEO artifact candidates:")
    if matching_files:
        for path in matching_files:
            print(f"- {path.relative_to(root)}")
    else:
        print("- none")
    print("")

    print("Candidate domains:")
    if domains:
        for domain in domains[:20]:
            print(f"- {domain}")
    else:
        print("- none")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
