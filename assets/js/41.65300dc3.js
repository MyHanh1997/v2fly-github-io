(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{423:function(t,s,e){"use strict";e.r(s);var o=e(11),a=Object(o.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"websocket"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[t._v("#")]),t._v(" WebSocket")]),t._v(" "),e("p",[t._v("使用标准的 WebSocket 来传输数据。WebSocket 连接可以被其它 HTTP 服务器（如 Nginx）分流，也可以被 VLESS fallbacks path 分流。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Websocket 会识别 HTTP 请求的 X-Forwarded-For 头来覆写流量的源地址，优先级高于 PROXY protocol。")])]),t._v(" "),e("h2",{attrs:{id:"websocketobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#websocketobject"}},[t._v("#")]),t._v(" WebSocketObject")]),t._v(" "),e("p",[e("code",[t._v("WebSocketObject")]),t._v(" 对应传输配置的 "),e("code",[t._v("wsSettings")]),t._v(" 项。")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"acceptProxyProtocol"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"headers"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v2ray.com"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[e("code",[t._v("acceptProxyProtocol")]),t._v(": true | false")])]),t._v(" "),e("p",[t._v("v4.27.1+，仅用于 inbound，是否接收 PROXY protocol，默认值为 "),e("code",[t._v("false")]),t._v("。填写 "),e("code",[t._v("true")]),t._v(" 时，最底层 TCP 连接建立后，请求方必须先发送 PROXY protocol v1 或 v2，否则连接会被关闭。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.haproxy.org/download/2.2/doc/proxy-protocol.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("PROXY protocol"),e("OutboundLink")],1),t._v(" 专用于传递请求的真实来源 IP 和端口，"),e("strong",[t._v("若你不了解它，请先忽略该项")]),t._v("。常见的反代软件（如 HAProxy、Nginx）都可以配置发送它，VLESS fallbacks xver 也可以发送它。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("path")]),t._v(" string")])]),t._v(" "),e("p",[t._v("WebSocket 所使用的 HTTP 协议路径，默认值为 "),e("code",[t._v('"/"')]),t._v("。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("headers")]),t._v(": map {string: string}")])]),t._v(" "),e("p",[t._v("自定义 HTTP 头，一个键值对，每个键表示一个 HTTP 头的名称，对应的值是字符串。默认值为空。")])])}),[],!1,null,null,null);s.default=a.exports}}]);