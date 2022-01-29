// // 練習問題
// const p = document.createElement("P");
// function upDate() {

//     // 現在時刻の取得
//     const nowTime = moment();

//     // 目的時間までの取得
//     const diff = moment('2112-09-03').diff(moment());

//     // ミリ秒
//     const duration = moment.duration(diff);

//     // 日・時・分・秒を取得
//     const days = Math.floor(duration.asDays());
//     const hours = duration.hours();
//     const minutes = duration.minutes();
//     const seconds = duration.seconds();

//     // 画面への出力
//     p.innerText = `ドラえもんが生まれるまで後${days}日${hours}時間${minutes}分${seconds}秒`;
// };
// document.body.appendChild(p);
// setInterval(upDate, 1000);

// チャレンジ問題

// 現在時刻の取得

const dateSearch = document.getElementById(`dateSearch`)

dateSearch.addEventListener(`click`, function () {
    // 現在時刻の取得
    function upTime() {
        const nowTime = moment();

        //    カレンダーから日付を取得
        const dateSet = document.getElementById(`dateSet`);
        const dateValue = dateSet.value;

        // 取得した日付までの残り日数
        const diff = moment(`${dateValue}`).diff(moment());

        //  ミリ秒
        const duration = moment.duration(diff);

        // 日・時・分・秒を取得
        const days = Math.floor(duration.asDays());
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();

        // 画面への出力
        const diffTime = document.getElementById(`diffTime`);
        diffTime.textContent = `${dateValue}まで後${days}日${hours}時間${minutes}分${seconds}秒`
    }
    setInterval(upTime, 1000)
});

