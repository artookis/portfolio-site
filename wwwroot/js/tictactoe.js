"use strict";

(function () {
    const statusEl = document.getElementById("status");
    const board = (() => {
        let state = Array.from({ length: 9 }, () => null);
        let turn = "X";

        const render = () => {
            const grid = document.getElementById("board");
            grid.innerHTML = "";
            state.forEach((cell, index) => {
                const btn = document.createElement("button");
                btn.className = "cell";
                btn.textContent = cell ?? "";
                btn.dataset.index = index;
                btn.onclick = () => move(index);
                grid.appendChild(btn);
            });
            statusEl.textContent = `Player ${turn}'s turn`;
        };

        const wins = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ];

        const winner = () => {
            for (const combo of wins) {
                const [a, b, c] = combo;
                if (state[a] && state[a] === state[b] && state[a] === state[c]) {
                    return state[a];
                }
            }
            if (state.every(Boolean)) return "draw";
            return null;
        };

        const move = (index) => {
            if (state[index] || winner()) return;
            state[index] = turn;
            const won = winner();
            render();
            if (won) {
                statusEl.textContent = won === "draw" ? "Draw!" : `Player ${won} wins!`;
                return;
            }
            turn = turn === "X" ? "O" : "X";
        };

        const reset = () => {
            state = Array.from({ length: 9 }, () => null);
            turn = "X";
            render();
        };

        return { render, reset };
    })();

    window.newGame = () => board.reset();
    board.render();
})();
