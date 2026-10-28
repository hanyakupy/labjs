// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "自己経験と他者視点によるSNS投稿評価実験",
    "description": "授業用試作：自分の経験を参照する条件／投稿者視点で読む条件を無作為に比較する。",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -85,
          "angle": 0,
          "width": 720,
          "height": 260,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "実験へのご協力のお願い\n\n本実験では、SNS上の投稿に対する印象や\n判断について調べます。所要時間は約8〜10分です。\n\n年齢・性別などの質問は回答任意です。\n参加は任意であり、いつでも中止できます。\n参加しない場合はページを閉じてください。\n\n内容に同意する場合は「同意する」を押してください。",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 20,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 170,
          "angle": 0,
          "width": 97,
          "height": 36,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "同意する",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 20,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "aoi",
          "left": 0,
          "top": 170,
          "angle": 0,
          "width": 97,
          "height": 60,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "rgba(0, 0, 0, 0.2)",
          "label": "aoi0"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "click @aoi0": "agree"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "consent"
    },
    {
      "type": "lab.html.Form",
      "title": "participantBackground",
      "content": "\u003Cstyle\u003E\n.nwpage{font-family:-apple-system,BlinkMacSystemFont,\"Noto Sans JP\",\"Hiragino Kaku Gothic ProN\",Meiryo,sans-serif;box-sizing:border-box;max-width:850px;margin:0 auto;padding:26px 24px;color:#253246;text-align:left;line-height:1.8}\n.nwpage *{box-sizing:border-box}.nwpage h2{font-size:28px;line-height:1.5;margin:0 0 18px;font-weight:700;color:#142132}\n.nwpage p{font-size:19px;line-height:1.85;margin:10px 0 18px}\n.nwpage .nw-muted{font-size:15px;color:#657289}.nwpage .nw-panel{border:1px solid #dae1ea;background:#f7f9fc;border-radius:12px;padding:24px 26px;font-size:22px;line-height:1.9;white-space:pre-line;overflow-wrap:anywhere}\n.nwpage label{display:block;font-size:18px;font-weight:600;margin:16px 0 6px}.nwpage input[type=number],.nwpage textarea,.nwpage select{display:block;border:1px solid #bbc6d5;border-radius:8px;padding:11px 13px;font-size:18px;font-family:inherit;color:#243040;background:white;max-width:100%;width:100%}\n.nwpage textarea{min-height:135px;resize:vertical;line-height:1.7}.nwpage .nw-options{display:flex;gap:10px 24px;flex-wrap:wrap;margin:8px 0 22px}.nwpage .nw-options label{display:flex;align-items:center;gap:9px;font-size:17px;font-weight:400;margin:0;white-space:normal}\n.nwpage .nw-options input{width:18px;height:18px;accent-color:#2563eb}.nwpage .nw-next{display:block;margin:26px 0 0 auto;background:#2563eb;color:white;font-size:19px;font-weight:600;border:0;border-radius:9px;padding:12px 36px;cursor:pointer}.nwpage .nw-next:hover{background:#1d4ed8}\n.nwpage .nw-divider{height:1px;background:#e3e7ee;margin:19px 0}.nwpage .nw-note{font-size:16px;color:#506178;border-left:4px solid #9bb6e9;padding:8px 12px;background:#f7f9ff}\n@media(max-width:620px){.nwpage{padding:18px 12px}.nwpage h2{font-size:24px}.nwpage .nw-panel{font-size:18px;padding:17px}.nwpage p{font-size:17px}.nwpage .nw-options label{font-size:16px}}\n\u003C\u002Fstyle\u003E\u003Cdiv class=\"nwpage\"\u003E\n  \u003Ch2\u003Eはじめに、あなたについてお聞きします\u003C\u002Fh2\u003E\n  \u003Cp\u003E以下の質問は、回答傾向を理解するためのものです。答えたくない項目は空欄のままでも構いません。\u003C\u002Fp\u003E\n  \u003Cform\u003E\n    \u003Clabel for=\"age\"\u003E年齢（任意）\u003C\u002Flabel\u003E\n    \u003Cinput id=\"age\" name=\"age\" type=\"number\" min=\"0\" max=\"120\" step=\"1\" placeholder=\"例：24（回答は任意）\"\u003E\n    \u003Clabel\u003E性別（任意）\u003C\u002Flabel\u003E\n    \u003Cdiv class=\"nw-options\" role=\"group\" aria-label=\"性別\"\u003E\n      \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"gender\" value=\"male\"\u003E男性\u003C\u002Flabel\u003E\n      \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"gender\" value=\"female\"\u003E女性\u003C\u002Flabel\u003E\n      \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"gender\" value=\"nonbinary_other\"\u003Eノンバイナリー・その他\u003C\u002Flabel\u003E\n      \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"gender\" value=\"prefer_not\"\u003E回答したくない\u003C\u002Flabel\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Clabel for=\"nightWalkFreq\"\u003E夜間に一人で道を歩く頻度（任意）\u003C\u002Flabel\u003E\n    \u003Cselect id=\"nightWalkFreq\" name=\"night_walk_frequency\"\u003E\n      \u003Coption value=\"\"\u003E選択してください（任意）\u003C\u002Foption\u003E\n      \u003Coption value=\"almost_never\"\u003Eほとんどない\u003C\u002Foption\u003E\n      \u003Coption value=\"less_monthly\"\u003E月に1回未満\u003C\u002Foption\u003E\n      \u003Coption value=\"few_monthly\"\u003E月に数回\u003C\u002Foption\u003E\n      \u003Coption value=\"weekly_1_2\"\u003E週に1〜2回\u003C\u002Foption\u003E\n      \u003Coption value=\"weekly_3_plus\"\u003E週に3回以上\u003C\u002Foption\u003E\n      \u003Coption value=\"prefer_not\"\u003E回答したくない\u003C\u002Foption\u003E\n    \u003C\u002Fselect\u003E\n    \u003Cbutton class=\"nw-next\" type=\"submit\"\u003E次へ\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E",
      "files": {},
      "responses": {},
      "parameters": {}
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "condition": "self",
          "instruction": "あなた自身が夜間に一人で道を歩いた経験を、一つ具体的に思い出してください。\nそのとき、周囲の様子をどう感じたか、不安や危険を感じたことがあったかを思い浮かべてください。\nこの後の投稿は、あなた自身が実際に経験したことを主な判断の基準として読んでください。",
          "reflectionPrompt": "あなた自身が夜道を歩いたときの経験を思い出し、そのときの気持ちや周囲の様子を1〜2文で書いてください。経験がない場合は、その旨を書いてください。"
        },
        {
          "condition": "other",
          "instruction": "これから、夜間に一人で歩くことについて書かれたSNS投稿を読んでいただきます。\n投稿者には、あなたとは異なる生活経験や環境があるかもしれません。\n自分だったらどう感じるかではなく、投稿者自身がどのような状況に置かれ、何を感じているのかを中心に読んでください。",
          "reflectionPrompt": "投稿者自身が夜道を歩くときに何を感じ、何を心配していたと思うか、投稿の内容にもとづいて1〜2文で書いてください。自分ではなく、投稿者の立場を中心に考えてください。"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": "1"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "instructionLoop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "randomConditionTrial",
        "content": [
          {
            "type": "lab.html.Form",
            "title": "perspectiveInstruction",
            "content": "\u003Cstyle\u003E\n.nwpage{font-family:-apple-system,BlinkMacSystemFont,\"Noto Sans JP\",\"Hiragino Kaku Gothic ProN\",Meiryo,sans-serif;box-sizing:border-box;max-width:850px;margin:0 auto;padding:26px 24px;color:#253246;text-align:left;line-height:1.8}\n.nwpage *{box-sizing:border-box}.nwpage h2{font-size:28px;line-height:1.5;margin:0 0 18px;font-weight:700;color:#142132}\n.nwpage p{font-size:19px;line-height:1.85;margin:10px 0 18px}\n.nwpage .nw-muted{font-size:15px;color:#657289}.nwpage .nw-panel{border:1px solid #dae1ea;background:#f7f9fc;border-radius:12px;padding:24px 26px;font-size:22px;line-height:1.9;white-space:pre-line;overflow-wrap:anywhere}\n.nwpage label{display:block;font-size:18px;font-weight:600;margin:16px 0 6px}.nwpage input[type=number],.nwpage textarea,.nwpage select{display:block;border:1px solid #bbc6d5;border-radius:8px;padding:11px 13px;font-size:18px;font-family:inherit;color:#243040;background:white;max-width:100%;width:100%}\n.nwpage textarea{min-height:135px;resize:vertical;line-height:1.7}.nwpage .nw-options{display:flex;gap:10px 24px;flex-wrap:wrap;margin:8px 0 22px}.nwpage .nw-options label{display:flex;align-items:center;gap:9px;font-size:17px;font-weight:400;margin:0;white-space:normal}\n.nwpage .nw-options input{width:18px;height:18px;accent-color:#2563eb}.nwpage .nw-next{display:block;margin:26px 0 0 auto;background:#2563eb;color:white;font-size:19px;font-weight:600;border:0;border-radius:9px;padding:12px 36px;cursor:pointer}.nwpage .nw-next:hover{background:#1d4ed8}\n.nwpage .nw-divider{height:1px;background:#e3e7ee;margin:19px 0}.nwpage .nw-note{font-size:16px;color:#506178;border-left:4px solid #9bb6e9;padding:8px 12px;background:#f7f9ff}\n@media(max-width:620px){.nwpage{padding:18px 12px}.nwpage h2{font-size:24px}.nwpage .nw-panel{font-size:18px;padding:17px}.nwpage p{font-size:17px}.nwpage .nw-options label{font-size:16px}}\n\u003C\u002Fstyle\u003E\u003Cdiv class=\"nwpage\"\u003E\n  \u003Ch2\u003E文章を読む前に\u003C\u002Fh2\u003E\n  \u003Cdiv class=\"nw-panel\"\u003E${this.parameters.instruction}\u003C\u002Fdiv\u003E\n  \u003Cp class=\"nw-note\"\u003E次の画面にはSNSの投稿が表示されます。上の指示を意識しながら読んでください。\u003C\u002Fp\u003E\n  \u003Cform\u003E\n    \u003Cinput type=\"hidden\" name=\"condition_assigned\" value=\"${this.parameters.condition}\"\u003E\n    \u003Cbutton class=\"nw-next\" type=\"submit\"\u003E次へ\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E",
            "files": {},
            "responses": {},
            "parameters": {}
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "rect",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 920,
                "height": 700,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "#f1f5f9"
              },
              {
                "type": "rect",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 800,
                "height": 622,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "#ffffff"
              },
              {
                "type": "circle",
                "left": -319,
                "top": -252,
                "angle": 0,
                "width": 54,
                "height": 54,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "#e5e7eb"
              },
              {
                "type": "circle",
                "left": -319,
                "top": -259,
                "angle": 0,
                "width": 16,
                "height": 16,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "#7b8492"
              },
              {
                "type": "circle",
                "left": -319,
                "top": -240,
                "angle": 0,
                "width": 29,
                "height": 18,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "#7b8492"
              },
              {
                "type": "i-text",
                "left": -273,
                "top": -266,
                "angle": 0,
                "width": 210,
                "height": 179.4,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#182334",
                "text": "dakag2355",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 24,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": -273,
                "top": -232,
                "angle": 0,
                "width": 210,
                "height": 179.4,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#718096",
                "text": "@gakadhys123",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 16,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": 327,
                "top": -252,
                "angle": 0,
                "width": 55,
                "height": 179.4,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#64748b",
                "text": "•••",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 26,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": 0,
                "top": -193,
                "angle": 0,
                "width": 715,
                "height": 2,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "#e2e8f0"
              },
              {
                "type": "i-text",
                "left": -330,
                "top": -140,
                "angle": 0,
                "width": 513,
                "height": 24,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#253044",
                "text": "最近、夜に一人で帰るとき、いつも周囲を気にしてしまう。",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 19,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": -330,
                "top": -82,
                "angle": 0,
                "width": 437,
                "height": 24,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#253044",
                "text": "大きな街で人通りがある場所でも、知らない人から",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 19,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": -330,
                "top": -50,
                "angle": 0,
                "width": 475,
                "height": 24,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#253044",
                "text": "じっと見られたり、後ろから足音が聞こえたりすると、",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 19,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": -330,
                "top": -18,
                "angle": 0,
                "width": 209,
                "height": 24,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#253044",
                "text": "不安になることがある。",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 19,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": -330,
                "top": 28,
                "angle": 0,
                "width": 342,
                "height": 24,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#253044",
                "text": "ただ普通に道を歩いているだけなのに、",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 19,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": -330,
                "top": 60,
                "angle": 0,
                "width": 399,
                "height": 24,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#253044",
                "text": "周囲に気を配らなければならないのは疲れる。",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 19,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": -330,
                "top": 104,
                "angle": 0,
                "width": 399,
                "height": 24,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#253044",
                "text": "夜道を歩くことに、こんなに神経を使わなくて",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 19,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "i-text",
                "left": -330,
                "top": 136,
                "angle": 0,
                "width": 247,
                "height": 24,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#253044",
                "text": "済む人が少しうらやましい。",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 19,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "left"
              },
              {
                "type": "rect",
                "left": 0,
                "top": 220,
                "angle": 0,
                "width": 715,
                "height": 2,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "#e2e8f0"
              },
              {
                "type": "i-text",
                "left": -260,
                "top": 252,
                "angle": 0,
                "width": 140,
                "height": 179.4,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#64748b",
                "text": "♡   いいね",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 19,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 252,
                "angle": 0,
                "width": 175,
                "height": 179.4,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#64748b",
                "text": "◯   コメント",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 19,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 260,
                "top": 252,
                "angle": 0,
                "width": 120,
                "height": 179.4,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#64748b",
                "text": "↗   共有",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 19,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": 295,
                "top": 327,
                "angle": 0,
                "width": 125,
                "height": 48,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "#2563eb"
              },
              {
                "type": "i-text",
                "left": 295,
                "top": 327,
                "angle": 0,
                "width": 96,
                "height": 179.4,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "次へ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 21,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "aoi",
                "left": 295,
                "top": 327,
                "angle": 0,
                "width": 125,
                "height": 55,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": "nextBtn"
              }
            ],
            "viewport": [
              1000,
              780
            ],
            "files": {},
            "responses": {
              "click @nextBtn": "next"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "snsPost_socialCard"
          },
          {
            "type": "lab.html.Form",
            "title": "perspectiveReflection",
            "content": "\u003Cstyle\u003E\n.nwpage{font-family:-apple-system,BlinkMacSystemFont,\"Noto Sans JP\",\"Hiragino Kaku Gothic ProN\",Meiryo,sans-serif;box-sizing:border-box;max-width:850px;margin:0 auto;padding:26px 24px;color:#253246;text-align:left;line-height:1.8}\n.nwpage *{box-sizing:border-box}.nwpage h2{font-size:28px;line-height:1.5;margin:0 0 18px;font-weight:700;color:#142132}\n.nwpage p{font-size:19px;line-height:1.85;margin:10px 0 18px}\n.nwpage .nw-muted{font-size:15px;color:#657289}.nwpage .nw-panel{border:1px solid #dae1ea;background:#f7f9fc;border-radius:12px;padding:24px 26px;font-size:22px;line-height:1.9;white-space:pre-line;overflow-wrap:anywhere}\n.nwpage label{display:block;font-size:18px;font-weight:600;margin:16px 0 6px}.nwpage input[type=number],.nwpage textarea,.nwpage select{display:block;border:1px solid #bbc6d5;border-radius:8px;padding:11px 13px;font-size:18px;font-family:inherit;color:#243040;background:white;max-width:100%;width:100%}\n.nwpage textarea{min-height:135px;resize:vertical;line-height:1.7}.nwpage .nw-options{display:flex;gap:10px 24px;flex-wrap:wrap;margin:8px 0 22px}.nwpage .nw-options label{display:flex;align-items:center;gap:9px;font-size:17px;font-weight:400;margin:0;white-space:normal}\n.nwpage .nw-options input{width:18px;height:18px;accent-color:#2563eb}.nwpage .nw-next{display:block;margin:26px 0 0 auto;background:#2563eb;color:white;font-size:19px;font-weight:600;border:0;border-radius:9px;padding:12px 36px;cursor:pointer}.nwpage .nw-next:hover{background:#1d4ed8}\n.nwpage .nw-divider{height:1px;background:#e3e7ee;margin:19px 0}.nwpage .nw-note{font-size:16px;color:#506178;border-left:4px solid #9bb6e9;padding:8px 12px;background:#f7f9ff}\n@media(max-width:620px){.nwpage{padding:18px 12px}.nwpage h2{font-size:24px}.nwpage .nw-panel{font-size:18px;padding:17px}.nwpage p{font-size:17px}.nwpage .nw-options label{font-size:16px}}\n\u003C\u002Fstyle\u003E\u003Cdiv class=\"nwpage\"\u003E\n  \u003Ch2\u003E先ほどの投稿について\u003C\u002Fh2\u003E\n  \u003Cp\u003E以下の質問に1〜2文で回答してください。地名や個人を特定できる情報は書かないでください。\u003C\u002Fp\u003E\n  \u003Cdiv class=\"nw-panel\"\u003E${this.parameters.reflectionPrompt}\u003C\u002Fdiv\u003E\n  \u003Cform\u003E\n    \u003Cinput type=\"hidden\" name=\"condition_assigned\" value=\"${this.parameters.condition}\"\u003E\n    \u003Clabel for=\"reflection\"\u003Eあなたの回答\u003C\u002Flabel\u003E\n    \u003Ctextarea id=\"reflection\" name=\"reflection_text\" rows=\"4\" placeholder=\"1〜2文でご記入ください。回答したくない場合は「回答しない」と記入してください。\" required\u003E\u003C\u002Ftextarea\u003E\n    \u003Cbutton class=\"nw-next\" type=\"submit\"\u003E次へ\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E",
            "files": {},
            "responses": {},
            "parameters": {}
          }
        ]
      }
    },
    {
      "type": "lab.html.Form",
      "title": "ratingMatrix_core",
      "content": "\u003Cstyle\u003E\n.matrix-wrap{font-family:-apple-system,BlinkMacSystemFont,\"Noto Sans JP\",sans-serif;max-width:1050px;margin:auto;color:#1f2937;padding:16px 18px;box-sizing:border-box}\n.matrix-wrap h2{font-size:23px;margin:10px 0 9px}.matrix-wrap .sub{font-size:20px;font-weight:600;line-height:1.55;color:#475569;margin-bottom:24px}\n.matrix-form{width:100%;border-collapse:collapse;table-layout:fixed}.matrix-form th,.matrix-form td{border-bottom:1px solid #d9dfe5;padding:15px 5px;text-align:center;vertical-align:middle}.matrix-form th:first-child{width:39%}.matrix-form td:first-child{text-align:left;font-size:17px;line-height:1.65;font-weight:500;padding-right:14px}.matrix-form thead th{font-size:13px;font-weight:600;line-height:1.45;white-space:normal}.matrix-form input[type=radio]{width:19px;height:19px;cursor:pointer;accent-color:#2864cc}.matrix-form tbody tr:hover{background:#f6f8fb}.matrix-wrap .scale{display:flex;justify-content:space-between;font-size:13px;color:#6b7280;margin-top:12px}.matrix-wrap button{margin-top:25px;background:#2563eb;color:white;border:0;border-radius:9px;padding:12px 34px;font-size:17px;cursor:pointer;float:right}.matrix-wrap button:hover{background:#1d4ed8}.matrix-wrap::after{content:\"\";display:block;clear:both}\n@media(max-width:700px){.matrix-form td:first-child{font-size:13px}.matrix-form thead th{font-size:10px}.matrix-form th:first-child{width:32%}.matrix-form th,.matrix-form td{padding:10px 2px}.matrix-form input[type=radio]{width:15px;height:15px}}\n\u003C\u002Fstyle\u003E\u003Cdiv class=\"matrix-wrap\"\u003E\u003Cdiv class=\"sub\"\u003E投稿を読んだ上で、以下の項目にお答えください。\u003C\u002Fdiv\u003E\u003Cform\u003E\u003Ctable class=\"matrix-form\"\u003E\u003Cthead\u003E\u003Ctr\u003E\u003Cth\u003E\u003C\u002Fth\u003E\u003Cth\u003E1\u003Cbr\u003E全くそう思わない\u003C\u002Fth\u003E\u003Cth\u003E2\u003Cbr\u003Eそう思わない\u003C\u002Fth\u003E\u003Cth\u003E3\u003Cbr\u003Eあまりそう思わない\u003C\u002Fth\u003E\u003Cth\u003E4\u003Cbr\u003Eどちらともいえない\u003C\u002Fth\u003E\u003Cth\u003E5\u003Cbr\u003Eややそう思う\u003C\u002Fth\u003E\u003Cth\u003E6\u003Cbr\u003Eそう思う\u003C\u002Fth\u003E\u003Cth\u003E7\u003Cbr\u003E非常にそう思う\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E\u003Ctbody\u003E\u003Ctr\u003E\u003Ctd\u003Eこの投稿に書かれている経験は信頼できると思う。\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"credibility\" value=\"1\" required aria-label=\"この投稿に書かれている経験は信頼できると思う。 1\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"credibility\" value=\"2\" required aria-label=\"この投稿に書かれている経験は信頼できると思う。 2\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"credibility\" value=\"3\" required aria-label=\"この投稿に書かれている経験は信頼できると思う。 3\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"credibility\" value=\"4\" required aria-label=\"この投稿に書かれている経験は信頼できると思う。 4\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"credibility\" value=\"5\" required aria-label=\"この投稿に書かれている経験は信頼できると思う。 5\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"credibility\" value=\"6\" required aria-label=\"この投稿に書かれている経験は信頼できると思う。 6\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"credibility\" value=\"7\" required aria-label=\"この投稿に書かれている経験は信頼できると思う。 7\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr\u003E\u003Ctd\u003E投稿者が不安を感じることは理解できる。\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"understanding\" value=\"1\" required aria-label=\"投稿者が不安を感じることは理解できる。 1\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"understanding\" value=\"2\" required aria-label=\"投稿者が不安を感じることは理解できる。 2\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"understanding\" value=\"3\" required aria-label=\"投稿者が不安を感じることは理解できる。 3\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"understanding\" value=\"4\" required aria-label=\"投稿者が不安を感じることは理解できる。 4\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"understanding\" value=\"5\" required aria-label=\"投稿者が不安を感じることは理解できる。 5\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"understanding\" value=\"6\" required aria-label=\"投稿者が不安を感じることは理解できる。 6\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"understanding\" value=\"7\" required aria-label=\"投稿者が不安を感じることは理解できる。 7\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr\u003E\u003Ctd\u003E投稿者は状況を大げさに捉えていると思う。\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"exaggeration\" value=\"1\" required aria-label=\"投稿者は状況を大げさに捉えていると思う。 1\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"exaggeration\" value=\"2\" required aria-label=\"投稿者は状況を大げさに捉えていると思う。 2\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"exaggeration\" value=\"3\" required aria-label=\"投稿者は状況を大げさに捉えていると思う。 3\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"exaggeration\" value=\"4\" required aria-label=\"投稿者は状況を大げさに捉えていると思う。 4\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"exaggeration\" value=\"5\" required aria-label=\"投稿者は状況を大げさに捉えていると思う。 5\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"exaggeration\" value=\"6\" required aria-label=\"投稿者は状況を大げさに捉えていると思う。 6\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"exaggeration\" value=\"7\" required aria-label=\"投稿者は状況を大げさに捉えていると思う。 7\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr\u003E\u003Ctd\u003E投稿者の気持ちに共感できる。\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"empathy\" value=\"1\" required aria-label=\"投稿者の気持ちに共感できる。 1\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"empathy\" value=\"2\" required aria-label=\"投稿者の気持ちに共感できる。 2\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"empathy\" value=\"3\" required aria-label=\"投稿者の気持ちに共感できる。 3\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"empathy\" value=\"4\" required aria-label=\"投稿者の気持ちに共感できる。 4\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"empathy\" value=\"5\" required aria-label=\"投稿者の気持ちに共感できる。 5\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"empathy\" value=\"6\" required aria-label=\"投稿者の気持ちに共感できる。 6\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"empathy\" value=\"7\" required aria-label=\"投稿者の気持ちに共感できる。 7\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr\u003E\u003Ctd\u003Eこの投稿に共感を示す反応をしたいと思う。\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"intention\" value=\"1\" required aria-label=\"この投稿に共感を示す反応をしたいと思う。 1\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"intention\" value=\"2\" required aria-label=\"この投稿に共感を示す反応をしたいと思う。 2\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"intention\" value=\"3\" required aria-label=\"この投稿に共感を示す反応をしたいと思う。 3\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"intention\" value=\"4\" required aria-label=\"この投稿に共感を示す反応をしたいと思う。 4\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"intention\" value=\"5\" required aria-label=\"この投稿に共感を示す反応をしたいと思う。 5\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"intention\" value=\"6\" required aria-label=\"この投稿に共感を示す反応をしたいと思う。 6\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"intention\" value=\"7\" required aria-label=\"この投稿に共感を示す反応をしたいと思う。 7\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\u003Cbutton type=\"submit\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {}
    },
    {
      "type": "lab.html.Form",
      "title": "ratingMatrix_interpretation",
      "content": "\u003Cstyle\u003E\n.matrix-wrap{font-family:-apple-system,BlinkMacSystemFont,\"Noto Sans JP\",sans-serif;max-width:1050px;margin:auto;color:#1f2937;padding:16px 18px;box-sizing:border-box}\n.matrix-wrap h2{font-size:23px;margin:10px 0 9px}.matrix-wrap .sub{font-size:20px;font-weight:600;line-height:1.55;color:#475569;margin-bottom:24px}\n.matrix-form{width:100%;border-collapse:collapse;table-layout:fixed}.matrix-form th,.matrix-form td{border-bottom:1px solid #d9dfe5;padding:15px 5px;text-align:center;vertical-align:middle}.matrix-form th:first-child{width:39%}.matrix-form td:first-child{text-align:left;font-size:17px;line-height:1.65;font-weight:500;padding-right:14px}.matrix-form thead th{font-size:13px;font-weight:600;line-height:1.45;white-space:normal}.matrix-form input[type=radio]{width:19px;height:19px;cursor:pointer;accent-color:#2864cc}.matrix-form tbody tr:hover{background:#f6f8fb}.matrix-wrap .scale{display:flex;justify-content:space-between;font-size:13px;color:#6b7280;margin-top:12px}.matrix-wrap button{margin-top:25px;background:#2563eb;color:white;border:0;border-radius:9px;padding:12px 34px;font-size:17px;cursor:pointer;float:right}.matrix-wrap button:hover{background:#1d4ed8}.matrix-wrap::after{content:\"\";display:block;clear:both}\n@media(max-width:700px){.matrix-form td:first-child{font-size:13px}.matrix-form thead th{font-size:10px}.matrix-form th:first-child{width:32%}.matrix-form th,.matrix-form td{padding:10px 2px}.matrix-form input[type=radio]{width:15px;height:15px}}\n\u003C\u002Fstyle\u003E\u003Cdiv class=\"matrix-wrap\"\u003E\u003Cdiv class=\"sub\"\u003E投稿内容や他者の経験の捉え方についてお答えください。\u003C\u002Fdiv\u003E\u003Cform\u003E\u003Ctable class=\"matrix-form\"\u003E\u003Cthead\u003E\u003Ctr\u003E\u003Cth\u003E\u003C\u002Fth\u003E\u003Cth\u003E1\u003Cbr\u003E全くそう思わない\u003C\u002Fth\u003E\u003Cth\u003E2\u003Cbr\u003Eそう思わない\u003C\u002Fth\u003E\u003Cth\u003E3\u003Cbr\u003Eあまりそう思わない\u003C\u002Fth\u003E\u003Cth\u003E4\u003Cbr\u003Eどちらともいえない\u003C\u002Fth\u003E\u003Cth\u003E5\u003Cbr\u003Eややそう思う\u003C\u002Fth\u003E\u003Cth\u003E6\u003Cbr\u003Eそう思う\u003C\u002Fth\u003E\u003Cth\u003E7\u003Cbr\u003E非常にそう思う\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E\u003Ctbody\u003E\u003Ctr\u003E\u003Ctd\u003E自分と異なる経験をした人の話でも、真剣に受け止めるべきだと思う。\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"experience_generalization\" value=\"1\" required aria-label=\"自分と異なる経験をした人の話でも、真剣に受け止めるべきだと思う。 1\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"experience_generalization\" value=\"2\" required aria-label=\"自分と異なる経験をした人の話でも、真剣に受け止めるべきだと思う。 2\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"experience_generalization\" value=\"3\" required aria-label=\"自分と異なる経験をした人の話でも、真剣に受け止めるべきだと思う。 3\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"experience_generalization\" value=\"4\" required aria-label=\"自分と異なる経験をした人の話でも、真剣に受け止めるべきだと思う。 4\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"experience_generalization\" value=\"5\" required aria-label=\"自分と異なる経験をした人の話でも、真剣に受け止めるべきだと思う。 5\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"experience_generalization\" value=\"6\" required aria-label=\"自分と異なる経験をした人の話でも、真剣に受け止めるべきだと思う。 6\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"experience_generalization\" value=\"7\" required aria-label=\"自分と異なる経験をした人の話でも、真剣に受け止めるべきだと思う。 7\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr\u003E\u003Ctd\u003E自分が危険を感じたことがなくても、他者が危険を感じることは十分あり得ると思う。\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"unseen_risk\" value=\"1\" required aria-label=\"自分が危険を感じたことがなくても、他者が危険を感じることは十分あり得ると思う。 1\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"unseen_risk\" value=\"2\" required aria-label=\"自分が危険を感じたことがなくても、他者が危険を感じることは十分あり得ると思う。 2\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"unseen_risk\" value=\"3\" required aria-label=\"自分が危険を感じたことがなくても、他者が危険を感じることは十分あり得ると思う。 3\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"unseen_risk\" value=\"4\" required aria-label=\"自分が危険を感じたことがなくても、他者が危険を感じることは十分あり得ると思う。 4\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"unseen_risk\" value=\"5\" required aria-label=\"自分が危険を感じたことがなくても、他者が危険を感じることは十分あり得ると思う。 5\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"unseen_risk\" value=\"6\" required aria-label=\"自分が危険を感じたことがなくても、他者が危険を感じることは十分あり得ると思う。 6\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"unseen_risk\" value=\"7\" required aria-label=\"自分が危険を感じたことがなくても、他者が危険を感じることは十分あり得ると思う。 7\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr\u003E\u003Ctd\u003E投稿者の不安は、気にしすぎによるものだと思う。\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"minimization\" value=\"1\" required aria-label=\"投稿者の不安は、気にしすぎによるものだと思う。 1\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"minimization\" value=\"2\" required aria-label=\"投稿者の不安は、気にしすぎによるものだと思う。 2\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"minimization\" value=\"3\" required aria-label=\"投稿者の不安は、気にしすぎによるものだと思う。 3\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"minimization\" value=\"4\" required aria-label=\"投稿者の不安は、気にしすぎによるものだと思う。 4\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"minimization\" value=\"5\" required aria-label=\"投稿者の不安は、気にしすぎによるものだと思う。 5\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"minimization\" value=\"6\" required aria-label=\"投稿者の不安は、気にしすぎによるものだと思う。 6\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"minimization\" value=\"7\" required aria-label=\"投稿者の不安は、気にしすぎによるものだと思う。 7\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr\u003E\u003Ctd\u003Eこの投稿で述べられた問題は、社会的に考える価値があると思う。\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"social_relevance\" value=\"1\" required aria-label=\"この投稿で述べられた問題は、社会的に考える価値があると思う。 1\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"social_relevance\" value=\"2\" required aria-label=\"この投稿で述べられた問題は、社会的に考える価値があると思う。 2\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"social_relevance\" value=\"3\" required aria-label=\"この投稿で述べられた問題は、社会的に考える価値があると思う。 3\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"social_relevance\" value=\"4\" required aria-label=\"この投稿で述べられた問題は、社会的に考える価値があると思う。 4\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"social_relevance\" value=\"5\" required aria-label=\"この投稿で述べられた問題は、社会的に考える価値があると思う。 5\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"social_relevance\" value=\"6\" required aria-label=\"この投稿で述べられた問題は、社会的に考える価値があると思う。 6\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"social_relevance\" value=\"7\" required aria-label=\"この投稿で述べられた問題は、社会的に考える価値があると思う。 7\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\u003Cbutton type=\"submit\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {}
    },
    {
      "type": "lab.html.Form",
      "title": "ratingMatrix_actions",
      "content": "\u003Cstyle\u003E\n.matrix-wrap{font-family:-apple-system,BlinkMacSystemFont,\"Noto Sans JP\",sans-serif;max-width:1050px;margin:auto;color:#1f2937;padding:16px 18px;box-sizing:border-box}\n.matrix-wrap h2{font-size:23px;margin:10px 0 9px}.matrix-wrap .sub{font-size:20px;font-weight:600;line-height:1.55;color:#475569;margin-bottom:24px}\n.matrix-form{width:100%;border-collapse:collapse;table-layout:fixed}.matrix-form th,.matrix-form td{border-bottom:1px solid #d9dfe5;padding:15px 5px;text-align:center;vertical-align:middle}.matrix-form th:first-child{width:39%}.matrix-form td:first-child{text-align:left;font-size:17px;line-height:1.65;font-weight:500;padding-right:14px}.matrix-form thead th{font-size:13px;font-weight:600;line-height:1.45;white-space:normal}.matrix-form input[type=radio]{width:19px;height:19px;cursor:pointer;accent-color:#2864cc}.matrix-form tbody tr:hover{background:#f6f8fb}.matrix-wrap .scale{display:flex;justify-content:space-between;font-size:13px;color:#6b7280;margin-top:12px}.matrix-wrap button{margin-top:25px;background:#2563eb;color:white;border:0;border-radius:9px;padding:12px 34px;font-size:17px;cursor:pointer;float:right}.matrix-wrap button:hover{background:#1d4ed8}.matrix-wrap::after{content:\"\";display:block;clear:both}\n@media(max-width:700px){.matrix-form td:first-child{font-size:13px}.matrix-form thead th{font-size:10px}.matrix-form th:first-child{width:32%}.matrix-form th,.matrix-form td{padding:10px 2px}.matrix-form input[type=radio]{width:15px;height:15px}}\n\u003C\u002Fstyle\u003E\u003Cdiv class=\"matrix-wrap\"\u003E\u003Cdiv class=\"sub\"\u003Eこの投稿をSNSで見かけた場合、あなたはどのように反応したいですか。\u003C\u002Fdiv\u003E\u003Cform\u003E\u003Ctable class=\"matrix-form\"\u003E\u003Cthead\u003E\u003Ctr\u003E\u003Cth\u003E\u003C\u002Fth\u003E\u003Cth\u003E1\u003Cbr\u003E全くそう思わない\u003C\u002Fth\u003E\u003Cth\u003E2\u003Cbr\u003Eそう思わない\u003C\u002Fth\u003E\u003Cth\u003E3\u003Cbr\u003Eあまりそう思わない\u003C\u002Fth\u003E\u003Cth\u003E4\u003Cbr\u003Eどちらともいえない\u003C\u002Fth\u003E\u003Cth\u003E5\u003Cbr\u003Eややそう思う\u003C\u002Fth\u003E\u003Cth\u003E6\u003Cbr\u003Eそう思う\u003C\u002Fth\u003E\u003Cth\u003E7\u003Cbr\u003E非常にそう思う\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E\u003Ctbody\u003E\u003Ctr\u003E\u003Ctd\u003Eこの投稿に「いいね」を押したいと思う。\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"like_intent\" value=\"1\" required aria-label=\"この投稿に「いいね」を押したいと思う。 1\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"like_intent\" value=\"2\" required aria-label=\"この投稿に「いいね」を押したいと思う。 2\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"like_intent\" value=\"3\" required aria-label=\"この投稿に「いいね」を押したいと思う。 3\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"like_intent\" value=\"4\" required aria-label=\"この投稿に「いいね」を押したいと思う。 4\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"like_intent\" value=\"5\" required aria-label=\"この投稿に「いいね」を押したいと思う。 5\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"like_intent\" value=\"6\" required aria-label=\"この投稿に「いいね」を押したいと思う。 6\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"like_intent\" value=\"7\" required aria-label=\"この投稿に「いいね」を押したいと思う。 7\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr\u003E\u003Ctd\u003E投稿者を支持するコメントを書きたいと思う。\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"support_comment\" value=\"1\" required aria-label=\"投稿者を支持するコメントを書きたいと思う。 1\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"support_comment\" value=\"2\" required aria-label=\"投稿者を支持するコメントを書きたいと思う。 2\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"support_comment\" value=\"3\" required aria-label=\"投稿者を支持するコメントを書きたいと思う。 3\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"support_comment\" value=\"4\" required aria-label=\"投稿者を支持するコメントを書きたいと思う。 4\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"support_comment\" value=\"5\" required aria-label=\"投稿者を支持するコメントを書きたいと思う。 5\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"support_comment\" value=\"6\" required aria-label=\"投稿者を支持するコメントを書きたいと思う。 6\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"support_comment\" value=\"7\" required aria-label=\"投稿者を支持するコメントを書きたいと思う。 7\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr\u003E\u003Ctd\u003Eこの投稿を他の人に共有したいと思う。\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"share_intent\" value=\"1\" required aria-label=\"この投稿を他の人に共有したいと思う。 1\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"share_intent\" value=\"2\" required aria-label=\"この投稿を他の人に共有したいと思う。 2\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"share_intent\" value=\"3\" required aria-label=\"この投稿を他の人に共有したいと思う。 3\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"share_intent\" value=\"4\" required aria-label=\"この投稿を他の人に共有したいと思う。 4\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"share_intent\" value=\"5\" required aria-label=\"この投稿を他の人に共有したいと思う。 5\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"share_intent\" value=\"6\" required aria-label=\"この投稿を他の人に共有したいと思う。 6\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"share_intent\" value=\"7\" required aria-label=\"この投稿を他の人に共有したいと思う。 7\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr\u003E\u003Ctd\u003E投稿者の不安を否定するコメントを書きたいと思う。\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"dismissive_comment\" value=\"1\" required aria-label=\"投稿者の不安を否定するコメントを書きたいと思う。 1\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"dismissive_comment\" value=\"2\" required aria-label=\"投稿者の不安を否定するコメントを書きたいと思う。 2\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"dismissive_comment\" value=\"3\" required aria-label=\"投稿者の不安を否定するコメントを書きたいと思う。 3\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"dismissive_comment\" value=\"4\" required aria-label=\"投稿者の不安を否定するコメントを書きたいと思う。 4\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"dismissive_comment\" value=\"5\" required aria-label=\"投稿者の不安を否定するコメントを書きたいと思う。 5\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"dismissive_comment\" value=\"6\" required aria-label=\"投稿者の不安を否定するコメントを書きたいと思う。 6\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"dismissive_comment\" value=\"7\" required aria-label=\"投稿者の不安を否定するコメントを書きたいと思う。 7\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\u003Cbutton type=\"submit\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {}
    },
    {
      "type": "lab.html.Form",
      "title": "manipulationCheck",
      "content": "\u003Cstyle\u003E\n.nwcheck{max-width:1120px;padding:20px;margin:0 auto;color:#253246;font-family:-apple-system,BlinkMacSystemFont,\"Noto Sans JP\",sans-serif}\n.nwcheck h2{font-size:25px;line-height:1.5}.nwcheck p{font-size:18px;color:#576980;line-height:1.6}\n.nwcheck table{width:100%;border-collapse:collapse;table-layout:fixed;margin-top:26px}.nwcheck th,.nwcheck td{border-bottom:1px solid #dbe2e9;text-align:center;padding:15px 6px}.nwcheck thead th{font-size:13px;line-height:1.4}.nwcheck thead th span{display:block;font-weight:500}.nwcheck th:first-child{width:38%;text-align:left}.nwcheck tbody th{font-size:17px;font-weight:500;line-height:1.65}.nwcheck input[type=radio]{width:19px;height:19px;accent-color:#2563eb;cursor:pointer}\n.nwcheck button{display:block;margin:26px 0 0 auto;background:#2563eb;color:#fff;padding:12px 36px;font-size:19px;border:0;border-radius:9px;cursor:pointer}\n@media(max-width:700px){.nwcheck{overflow-x:auto}.nwcheck table{min-width:720px}}\n\u003C\u002Fstyle\u003E\u003Cdiv class=\"nwcheck\"\u003E\n\u003Ch2\u003E投稿を読んだときの考え方について\u003C\u002Fh2\u003E\n\u003Cp\u003E次の各項目について、どの程度当てはまるかを回答してください。\u003C\u002Fp\u003E\n\u003Cform\u003E\u003Ctable\u003E\u003Cthead\u003E\u003Ctr\u003E\u003Cth\u003E\u003C\u002Fth\u003E\u003Cth scope=\"col\"\u003E1\u003Cspan\u003E全くそう思わない\u003C\u002Fspan\u003E\u003C\u002Fth\u003E\u003Cth scope=\"col\"\u003E2\u003Cspan\u003Eそう思わない\u003C\u002Fspan\u003E\u003C\u002Fth\u003E\u003Cth scope=\"col\"\u003E3\u003Cspan\u003Eあまりそう思わない\u003C\u002Fspan\u003E\u003C\u002Fth\u003E\u003Cth scope=\"col\"\u003E4\u003Cspan\u003Eどちらともいえない\u003C\u002Fspan\u003E\u003C\u002Fth\u003E\u003Cth scope=\"col\"\u003E5\u003Cspan\u003Eややそう思う\u003C\u002Fspan\u003E\u003C\u002Fth\u003E\u003Cth scope=\"col\"\u003E6\u003Cspan\u003Eそう思う\u003C\u002Fspan\u003E\u003C\u002Fth\u003E\u003Cth scope=\"col\"\u003E7\u003Cspan\u003E非常にそう思う\u003C\u002Fspan\u003E\u003C\u002Fth\u003E\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E\u003Ctbody\u003E\u003Ctr\u003E\u003Cth scope=\"row\"\u003E投稿を評価する際、自分自身の経験や感覚を判断の基準にした。\u003C\u002Fth\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"check_self_reference\" value=\"1\" required aria-label=\"投稿を評価する際、自分自身の経験や感覚を判断の基準にした。 1\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"check_self_reference\" value=\"2\" required aria-label=\"投稿を評価する際、自分自身の経験や感覚を判断の基準にした。 2\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"check_self_reference\" value=\"3\" required aria-label=\"投稿を評価する際、自分自身の経験や感覚を判断の基準にした。 3\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"check_self_reference\" value=\"4\" required aria-label=\"投稿を評価する際、自分自身の経験や感覚を判断の基準にした。 4\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"check_self_reference\" value=\"5\" required aria-label=\"投稿を評価する際、自分自身の経験や感覚を判断の基準にした。 5\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"check_self_reference\" value=\"6\" required aria-label=\"投稿を評価する際、自分自身の経験や感覚を判断の基準にした。 6\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"check_self_reference\" value=\"7\" required aria-label=\"投稿を評価する際、自分自身の経験や感覚を判断の基準にした。 7\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr\u003E\u003Cth scope=\"row\"\u003E投稿を評価する際、投稿者自身の立場や生活環境を意識した。\u003C\u002Fth\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"check_perspective\" value=\"1\" required aria-label=\"投稿を評価する際、投稿者自身の立場や生活環境を意識した。 1\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"check_perspective\" value=\"2\" required aria-label=\"投稿を評価する際、投稿者自身の立場や生活環境を意識した。 2\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"check_perspective\" value=\"3\" required aria-label=\"投稿を評価する際、投稿者自身の立場や生活環境を意識した。 3\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"check_perspective\" value=\"4\" required aria-label=\"投稿を評価する際、投稿者自身の立場や生活環境を意識した。 4\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"check_perspective\" value=\"5\" required aria-label=\"投稿を評価する際、投稿者自身の立場や生活環境を意識した。 5\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"check_perspective\" value=\"6\" required aria-label=\"投稿を評価する際、投稿者自身の立場や生活環境を意識した。 6\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Clabel\u003E\u003Cinput type=\"radio\" name=\"check_perspective\" value=\"7\" required aria-label=\"投稿を評価する際、投稿者自身の立場や生活環境を意識した。 7\"\u003E\u003C\u002Flabel\u003E\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\n\u003Cbutton type=\"submit\"\u003E次へ\u003C\u002Fbutton\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E",
      "files": {},
      "responses": {},
      "parameters": {}
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -90,
          "angle": 0,
          "width": 700,
          "height": 89.7,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "あなたは、夜間に一人で道を歩くとき、どの程度不安を感じますか。\n\n1 = まったく不安を感じない　　7 = 非常に不安を感じる",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 23,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": -308.57142857142856,
          "top": 170,
          "angle": 0,
          "width": 94.85714285714286,
          "height": 36,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "1",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 20,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "aoi",
          "left": -308.57142857142856,
          "top": 170,
          "angle": 0,
          "width": 94.85714285714286,
          "height": 60,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "rgba(0, 0, 0, 0.2)",
          "label": "aoi0"
        },
        {
          "type": "i-text",
          "left": -205.71428571428572,
          "top": 170,
          "angle": 0,
          "width": 94.85714285714286,
          "height": 36,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "2",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 20,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "aoi",
          "left": -205.71428571428572,
          "top": 170,
          "angle": 0,
          "width": 94.85714285714286,
          "height": 60,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "rgba(0, 0, 0, 0.2)",
          "label": "aoi1"
        },
        {
          "type": "i-text",
          "left": -102.85714285714286,
          "top": 170,
          "angle": 0,
          "width": 94.85714285714286,
          "height": 36,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "3",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 20,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "aoi",
          "left": -102.85714285714286,
          "top": 170,
          "angle": 0,
          "width": 94.85714285714286,
          "height": 60,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "rgba(0, 0, 0, 0.2)",
          "label": "aoi2"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 170,
          "angle": 0,
          "width": 94.85714285714286,
          "height": 36,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "4",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 20,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "aoi",
          "left": 0,
          "top": 170,
          "angle": 0,
          "width": 94.85714285714286,
          "height": 60,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "rgba(0, 0, 0, 0.2)",
          "label": "aoi3"
        },
        {
          "type": "i-text",
          "left": 102.85714285714286,
          "top": 170,
          "angle": 0,
          "width": 94.85714285714286,
          "height": 36,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "5",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 20,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "aoi",
          "left": 102.85714285714286,
          "top": 170,
          "angle": 0,
          "width": 94.85714285714286,
          "height": 60,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "rgba(0, 0, 0, 0.2)",
          "label": "aoi4"
        },
        {
          "type": "i-text",
          "left": 205.71428571428572,
          "top": 170,
          "angle": 0,
          "width": 94.85714285714286,
          "height": 36,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "6",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 20,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "aoi",
          "left": 205.71428571428572,
          "top": 170,
          "angle": 0,
          "width": 94.85714285714286,
          "height": 60,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "rgba(0, 0, 0, 0.2)",
          "label": "aoi5"
        },
        {
          "type": "i-text",
          "left": 308.57142857142856,
          "top": 170,
          "angle": 0,
          "width": 94.85714285714286,
          "height": 36,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "7",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 20,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "aoi",
          "left": 308.57142857142856,
          "top": 170,
          "angle": 0,
          "width": 94.85714285714286,
          "height": 60,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "rgba(0, 0, 0, 0.2)",
          "label": "aoi6"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "click @aoi0": "1",
        "click @aoi1": "2",
        "click @aoi2": "3",
        "click @aoi3": "4",
        "click @aoi4": "5",
        "click @aoi5": "6",
        "click @aoi6": "7"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "nightWalkingSafety"
    },
    {
      "type": "lab.html.Form",
      "title": "debriefing",
      "content": "\u003Cstyle\u003E\n.nwpage{font-family:-apple-system,BlinkMacSystemFont,\"Noto Sans JP\",\"Hiragino Kaku Gothic ProN\",Meiryo,sans-serif;box-sizing:border-box;max-width:850px;margin:0 auto;padding:26px 24px;color:#253246;text-align:left;line-height:1.8}\n.nwpage *{box-sizing:border-box}.nwpage h2{font-size:28px;line-height:1.5;margin:0 0 18px;font-weight:700;color:#142132}\n.nwpage p{font-size:19px;line-height:1.85;margin:10px 0 18px}\n.nwpage .nw-muted{font-size:15px;color:#657289}.nwpage .nw-panel{border:1px solid #dae1ea;background:#f7f9fc;border-radius:12px;padding:24px 26px;font-size:22px;line-height:1.9;white-space:pre-line;overflow-wrap:anywhere}\n.nwpage label{display:block;font-size:18px;font-weight:600;margin:16px 0 6px}.nwpage input[type=number],.nwpage textarea,.nwpage select{display:block;border:1px solid #bbc6d5;border-radius:8px;padding:11px 13px;font-size:18px;font-family:inherit;color:#243040;background:white;max-width:100%;width:100%}\n.nwpage textarea{min-height:135px;resize:vertical;line-height:1.7}.nwpage .nw-options{display:flex;gap:10px 24px;flex-wrap:wrap;margin:8px 0 22px}.nwpage .nw-options label{display:flex;align-items:center;gap:9px;font-size:17px;font-weight:400;margin:0;white-space:normal}\n.nwpage .nw-options input{width:18px;height:18px;accent-color:#2563eb}.nwpage .nw-next{display:block;margin:26px 0 0 auto;background:#2563eb;color:white;font-size:19px;font-weight:600;border:0;border-radius:9px;padding:12px 36px;cursor:pointer}.nwpage .nw-next:hover{background:#1d4ed8}\n.nwpage .nw-divider{height:1px;background:#e3e7ee;margin:19px 0}.nwpage .nw-note{font-size:16px;color:#506178;border-left:4px solid #9bb6e9;padding:8px 12px;background:#f7f9ff}\n@media(max-width:620px){.nwpage{padding:18px 12px}.nwpage h2{font-size:24px}.nwpage .nw-panel{font-size:18px;padding:17px}.nwpage p{font-size:17px}.nwpage .nw-options label{font-size:16px}}\n\u003C\u002Fstyle\u003E\u003Cdiv class=\"nwpage\"\u003E\n  \u003Ch2\u003E実験へのご協力ありがとうございました\u003C\u002Fh2\u003E\n  \u003Cp\u003Eこの実験の目的は、\u003Cstrong\u003E自分自身の経験を判断の基準としてSNS投稿を読む場合\u003C\u002Fstrong\u003Eと、\u003Cstrong\u003E投稿者の立場や感情を想像して読む場合\u003C\u002Fstrong\u003Eとで、他者の経験談への評価が変わるかどうかを検討することです。\u003C\u002Fp\u003E\n  \u003Cp\u003E参加者には、いずれかの読み方をランダムに提示しました。そして、投稿の\u003Cstrong\u003E信頼性、共感、誇張されていると感じる程度、SNS上での反応意図\u003C\u002Fstrong\u003Eなどを回答していただきました。また、ご自身の夜間歩行への不安や、回答中に意識した視点との関連も探索します。\u003C\u002Fp\u003E\n  \u003Cp\u003Eこの実験は、どちらの考え方が「正しい」か、あるいは特定の性別の人が優れているかを判定するものではありません。経験や読み方の違いが、他者の言葉を理解する過程にどう関わるかを調べるものです。\u003C\u002Fp\u003E\n  \u003Cp\u003E表示したSNS投稿は、実験用に作成した架空の文章です。ご協力ありがとうございました。\u003C\u002Fp\u003E\n  \u003Cdiv class=\"nw-divider\"\u003E\u003C\u002Fdiv\u003E\n  \u003Cp class=\"nw-muted\"\u003E内容について質問がある場合は、実験実施者にお問い合わせください。この画面を閉じると終了です。\u003C\u002Fp\u003E\n  \u003Cform\u003E\u003Cbutton class=\"nw-next\" type=\"submit\"\u003E終了\u003C\u002Fbutton\u003E\u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
  //check Tardy
//ファイル名をランダムIDにする
const participantID = this.random.uuid4()

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "rgAisrqfR6qd",
    filename: filename,
    data: data,
  }),
});

}
      },
      "tardy": true
    }
  ]
})

// Let's go!
study.run()