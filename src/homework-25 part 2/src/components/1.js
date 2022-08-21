// async function getList() {
//     // const {token} = JSON.parse(localStorage.getItem('Logged'));
//     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicm9nYWFuZGtvcHl0YUBtYWlsLmNvbSIsImJyb3dzZXIiOiJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTA0LjAuNTExMi44MSBTYWZhcmkvNTM3LjM2IEVkZy8xMDQuMC4xMjkzLjU0IiwiaXAiOiIxMjcuMC4wLjEiLCJpc3N1ZXIiOiJodHRwczovL3RvZG8uaGlsbGVsLml0IiwibWF4QWdlIjoiN2QiLCJpYXQiOjE2NjA5OTE5MzV9.OtXMzIvjcUM_zj9uvU1TYWnNCbv0IaDOQaoPVRjMn44';
//
//     if (token) {
//         const headers = new Headers();
//         headers.set('Authorization', `Bearer ${ token }`);
//         headers.set('Content-Type', 'application/json');
//         try {
//             const resp = await fetch(`https://todo.hillel.it/todo`, {
//                 method: 'GET', headers,
//             });
//
//             return await resp.json();
//         } catch (e) {
//             console.log(e);
//         }
//     }
// }
//
// async function add(text, priority = 1) {
//     const reqBody = JSON.stringify({value: text, priority});
//     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicm9nYWFuZGtvcHl0YUBtYWlsLmNvbSIsImJyb3dzZXIiOiJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTA0LjAuNTExMi44MSBTYWZhcmkvNTM3LjM2IEVkZy8xMDQuMC4xMjkzLjU0IiwiaXAiOiIxMjcuMC4wLjEiLCJpc3N1ZXIiOiJodHRwczovL3RvZG8uaGlsbGVsLml0IiwibWF4QWdlIjoiN2QiLCJpYXQiOjE2NjA5OTE5MzV9.OtXMzIvjcUM_zj9uvU1TYWnNCbv0IaDOQaoPVRjMn44';
//
//
//     const headers = new Headers();
//     headers.set('Authorization', `Bearer ${ token }`);
//     headers.set('Content-Type', 'application/json');
//
//     const resp = await fetch(`https://todo.hillel.it/todo`, {
//         method: 'POST', headers, body: reqBody,
//     });
//
//     // this.list.push(task);
//     return await resp.json();
// }
//
// async function addTodo() {
//     console.log(await add('перша задача'));
// }
//
//
// async function list() {
//     console.log(await getList());
// }
//
// addTodo().then();
// list().then();