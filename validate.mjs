import { existsSync } from "node:fs";
if (existsSync("broken-build")) throw new Error("Intentional synthetic build failure");
console.log("Synthetic application build passed");
