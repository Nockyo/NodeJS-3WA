import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function getViewsPatch() {
    return path.join(__dirname, "../views")
}