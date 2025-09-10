import fs from "fs";
import path from "path";
export type RouteNode = {
  segment: string;
  path: string;
  isPage: boolean;
  children: RouteNode[];
};

const exts = ["ts", "tsx", "js", "jsx"];
const PAGE_FILES = exts.map((ext) => `page.${ext}`);

export function scanRoutes(
  dir: string = "app",
  urlPrefix: string = ""
): RouteNode[] {
  const root = path.resolve(process.cwd(), dir);
  if (!fs.existsSync(root)) return [];
  const entries = fs.readdirSync(root, { withFileTypes: true });
  const routes: RouteNode[] = [];
  for (const entry of entries) {
    if (entry.name.startsWith("@")) continue;
    if (entry.isDirectory()) {
      let segment = entry.name;
      if (segment.startsWith("(") && segment.endsWith(")"))
        segment = segment.slice(1, -1);
      const subDir = path.join(root, entry.name);
      const childUrl = `${urlPrefix}/${segment}`.replace(/\/+/g, "/");
      const isPage = PAGE_FILES.some((f) =>
        fs.existsSync(path.join(subDir, f))
      );
      const children = scanRoutes(subDir, childUrl);
      if (isPage || children.length > 0) {
        routes.push({
          segment: segment,
          path: childUrl || "/",
          isPage: isPage,
          children: children,
        });
      }
    }
  }
  return routes;
}

console.log(scanRoutes());
