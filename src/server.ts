import { clearScreenDown } from "readline";
import app from "./app";

function main() {
    app.listen(3000, 'localhost', () => {
        console.log('Server rodando na porta 3000');
    });
}

main();