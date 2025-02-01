import { getComments } from "./modules/api.js";







        export function getNowDate() {
            const date = new Date();
              return date.toLocaleTimeString('ru-RU', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: "2-digit",
              minute: "2-digit"
            });
            }

getComments()



