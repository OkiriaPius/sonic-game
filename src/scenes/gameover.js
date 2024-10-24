import k from "../kaplayCtx";

export default function gameover(citySfx) {
    citySfx.paused = true;
    let bestScore = k.getData("best-scores");
    const currentScore = k.getData("current-score");

    const rankGrades = ["F", "E", "D", "C", "B", "A", "S" ];
    const rankValues = [40, 80, 100, 200, 300, 400, 500];

    let currentRank = "F";
    let bestRank = "F";

    for (let i = 0; i < rankValues.length; i++) {
        if (rankValues[i] < currentScore) {
            currentRank = rankGrades[i];
        }
        if (rankValues[i] < bestScore) {
            bestRank = rankGrades[i];
        }
    }

    if (bestScore < currentScore) {
        k.setData("best-scores", currentScore);
        bestScore = currentScore;
        bestRank = currentRank;
    }

    k.add([
        k.text("GAMEOVER", {font: "mania", size: 96 }),
        k.anchor("center"),
        k.pos(k.center().x, k.center().y -300),
    ]);
    k.add([
        k.text(`BEST SCORE: ${bestScore}`, {font: "mania", size: 64}),
        k.anchor("center"),
        k.pos(k.center().x - 400, k.center().y - 200),
    ]);
    k.add([
        k.text(`CURRENT SCORE: ${currentScore}`, {font: "mania", size: 64}),
        k.anchor("center"),
        k.pos(k.center().x + 400, k.center().y - 200),
    ]);

    const bestRankBox = k.add([
        k.rect(400, 400, {radius: 4}),
        k.area(),
        k.color(0, 0, 0),
        k.outline(6, k.Color.fromArray([255, 255, 255])),
        k.pos(k.center().x - 400, k.center().y + 50),
        k.anchor("center"),
    ]);
    bestRankBox.add([
        k.text(bestRank, {font: "mania", size: 100}),
        k.anchor("center"),
    ]);
    const currentRankBox = k.add([
        k.rect(400, 400, {radius: 4}),
        k.area(),
        k.color(0, 0, 0),
        k.outline(6, k.Color.fromArray([255, 255, 255])),
        k.pos(k.center().x + 400, k.center().y + 50),
        k.anchor("center"),
    ]);
    currentRankBox.add([
        k.text(currentRank, {font: "mania", size: 100}),
        k.anchor("center"),
    ]);
    k.wait(1, () => {
        k.add([
            k.text("Press Space/Click/Touch to Play Again", {
                font: "mania",
                size: 64,
            }),
            k.anchor("center"),
            k.pos(k.center().x, k.center().y + 350),
        ]);
        k.onButtonPress("jump", () => {
            k.go("game");
        });
    });
}