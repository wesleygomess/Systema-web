<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>Integração do React Native com projetos nativos Android e iOS existentes</title><style>
/* cspell:disable-file */
/* webkit printing magic: print all background colors */
html {
	-webkit-print-color-adjust: exact;
}
* {
	box-sizing: border-box;
	-webkit-print-color-adjust: exact;
}

html,
body {
	margin: 0;
	padding: 0;
}
@media only screen {
	body {
		margin: 2em auto;
		max-width: 900px;
		color: rgb(55, 53, 47);
	}
}

body {
	line-height: 1.5;
	white-space: pre-wrap;
}

a,
a.visited {
	color: inherit;
	text-decoration: underline;
}

.pdf-relative-link-path {
	font-size: 80%;
	color: #444;
}

h1,
h2,
h3 {
	letter-spacing: -0.01em;
	line-height: 1.2;
	font-weight: 600;
	margin-bottom: 0;
}

.page-title {
	font-size: 2.5rem;
	font-weight: 700;
	margin-top: 0;
	margin-bottom: 0.75em;
}

h1 {
	font-size: 1.875rem;
	margin-top: 1.875rem;
}

h2 {
	font-size: 1.5rem;
	margin-top: 1.5rem;
}

h3 {
	font-size: 1.25rem;
	margin-top: 1.25rem;
}

.source {
	border: 1px solid #ddd;
	border-radius: 3px;
	padding: 1.5em;
	word-break: break-all;
}

.callout {
	border-radius: 3px;
	padding: 1rem;
}

figure {
	margin: 1.25em 0;
	page-break-inside: avoid;
}

figcaption {
	opacity: 0.5;
	font-size: 85%;
	margin-top: 0.5em;
}

mark {
	background-color: transparent;
}

.indented {
	padding-left: 1.5em;
}

hr {
	background: transparent;
	display: block;
	width: 100%;
	height: 1px;
	visibility: visible;
	border: none;
	border-bottom: 1px solid rgba(55, 53, 47, 0.09);
}

img {
	max-width: 100%;
}

@media only print {
	img {
		max-height: 100vh;
		object-fit: contain;
	}
}

@page {
	margin: 1in;
}

.collection-content {
	font-size: 0.875rem;
}

.column-list {
	display: flex;
	justify-content: space-between;
}

.column {
	padding: 0 1em;
}

.column:first-child {
	padding-left: 0;
}

.column:last-child {
	padding-right: 0;
}

.table_of_contents-item {
	display: block;
	font-size: 0.875rem;
	line-height: 1.3;
	padding: 0.125rem;
}

.table_of_contents-indent-1 {
	margin-left: 1.5rem;
}

.table_of_contents-indent-2 {
	margin-left: 3rem;
}

.table_of_contents-indent-3 {
	margin-left: 4.5rem;
}

.table_of_contents-link {
	text-decoration: none;
	opacity: 0.7;
	border-bottom: 1px solid rgba(55, 53, 47, 0.18);
}

table,
th,
td {
	border: 1px solid rgba(55, 53, 47, 0.09);
	border-collapse: collapse;
}

table {
	border-left: none;
	border-right: none;
}

th,
td {
	font-weight: normal;
	padding: 0.25em 0.5em;
	line-height: 1.5;
	min-height: 1.5em;
	text-align: left;
}

th {
	color: rgba(55, 53, 47, 0.6);
}

ol,
ul {
	margin: 0;
	margin-block-start: 0.6em;
	margin-block-end: 0.6em;
}

li > ol:first-child,
li > ul:first-child {
	margin-block-start: 0.6em;
}

ul > li {
	list-style: disc;
}

ul.to-do-list {
	text-indent: -1.7em;
}

ul.to-do-list > li {
	list-style: none;
}

.to-do-children-checked {
	text-decoration: line-through;
	opacity: 0.375;
}

ul.toggle > li {
	list-style: none;
}

ul {
	padding-inline-start: 1.7em;
}

ul > li {
	padding-left: 0.1em;
}

ol {
	padding-inline-start: 1.6em;
}

ol > li {
	padding-left: 0.2em;
}

.mono ol {
	padding-inline-start: 2em;
}

.mono ol > li {
	text-indent: -0.4em;
}

.toggle {
	padding-inline-start: 0em;
	list-style-type: none;
}

/* Indent toggle children */
.toggle > li > details {
	padding-left: 1.7em;
}

.toggle > li > details > summary {
	margin-left: -1.1em;
}

.selected-value {
	display: inline-block;
	padding: 0 0.5em;
	background: rgba(206, 205, 202, 0.5);
	border-radius: 3px;
	margin-right: 0.5em;
	margin-top: 0.3em;
	margin-bottom: 0.3em;
	white-space: nowrap;
}

.collection-title {
	display: inline-block;
	margin-right: 1em;
}

time {
	opacity: 0.5;
}

.icon {
	display: inline-block;
	max-width: 1.2em;
	max-height: 1.2em;
	text-decoration: none;
	vertical-align: text-bottom;
	margin-right: 0.5em;
}

img.icon {
	border-radius: 3px;
}

.user-icon {
	width: 1.5em;
	height: 1.5em;
	border-radius: 100%;
	margin-right: 0.5rem;
}

.user-icon-inner {
	font-size: 0.8em;
}

.text-icon {
	border: 1px solid #000;
	text-align: center;
}

.page-cover-image {
	display: block;
	object-fit: cover;
	width: 100%;
	height: 30vh;
}

.page-header-icon {
	font-size: 3rem;
	margin-bottom: 1rem;
}

.page-header-icon-with-cover {
	margin-top: -0.72em;
	margin-left: 0.07em;
}

.page-header-icon img {
	border-radius: 3px;
}

.link-to-page {
	margin: 1em 0;
	padding: 0;
	border: none;
	font-weight: 500;
}

p > .user {
	opacity: 0.5;
}

td > .user,
td > time {
	white-space: nowrap;
}

input[type="checkbox"] {
	transform: scale(1.5);
	margin-right: 0.6em;
	vertical-align: middle;
}

p {
	margin-top: 0.5em;
	margin-bottom: 0.5em;
}

.image {
	border: none;
	margin: 1.5em 0;
	padding: 0;
	border-radius: 0;
	text-align: center;
}

.code,
code {
	background: rgba(135, 131, 120, 0.15);
	border-radius: 3px;
	padding: 0.2em 0.4em;
	border-radius: 3px;
	font-size: 85%;
	tab-size: 2;
}

code {
	color: #eb5757;
}

.code {
	padding: 1.5em 1em;
}

.code-wrap {
	white-space: pre-wrap;
	word-break: break-all;
}

.code > code {
	background: none;
	padding: 0;
	font-size: 100%;
	color: inherit;
}

blockquote {
	font-size: 1.25em;
	margin: 1em 0;
	padding-left: 1em;
	border-left: 3px solid rgb(55, 53, 47);
}

.bookmark {
	text-decoration: none;
	max-height: 8em;
	padding: 0;
	display: flex;
	width: 100%;
	align-items: stretch;
}

.bookmark-title {
	font-size: 0.85em;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 1.75em;
	white-space: nowrap;
}

.bookmark-text {
	display: flex;
	flex-direction: column;
}

.bookmark-info {
	flex: 4 1 180px;
	padding: 12px 14px 14px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.bookmark-image {
	width: 33%;
	flex: 1 1 180px;
	display: block;
	position: relative;
	object-fit: cover;
	border-radius: 1px;
}

.bookmark-description {
	color: rgba(55, 53, 47, 0.6);
	font-size: 0.75em;
	overflow: hidden;
	max-height: 4.5em;
	word-break: break-word;
}

.bookmark-href {
	font-size: 0.75em;
	margin-top: 0.25em;
}

.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
.code { font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; }
.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }
.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }
.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }
.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }
.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }
.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }
.pdf .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }
.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }
.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }
.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }
.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.highlight-default {
}
.highlight-gray {
	color: rgb(155,154,151);
}
.highlight-brown {
	color: rgb(100,71,58);
}
.highlight-orange {
	color: rgb(217,115,13);
}
.highlight-yellow {
	color: rgb(223,171,1);
}
.highlight-teal {
	color: rgb(15,123,108);
}
.highlight-blue {
	color: rgb(11,110,153);
}
.highlight-purple {
	color: rgb(105,64,165);
}
.highlight-pink {
	color: rgb(173,26,114);
}
.highlight-red {
	color: rgb(224,62,62);
}
.highlight-gray_background {
	background: rgb(235,236,237);
}
.highlight-brown_background {
	background: rgb(233,229,227);
}
.highlight-orange_background {
	background: rgb(250,235,221);
}
.highlight-yellow_background {
	background: rgb(251,243,219);
}
.highlight-teal_background {
	background: rgb(221,237,234);
}
.highlight-blue_background {
	background: rgb(221,235,241);
}
.highlight-purple_background {
	background: rgb(234,228,242);
}
.highlight-pink_background {
	background: rgb(244,223,235);
}
.highlight-red_background {
	background: rgb(251,228,228);
}
.block-color-default {
	color: inherit;
	fill: inherit;
}
.block-color-gray {
	color: rgba(55, 53, 47, 0.6);
	fill: rgba(55, 53, 47, 0.6);
}
.block-color-brown {
	color: rgb(100,71,58);
	fill: rgb(100,71,58);
}
.block-color-orange {
	color: rgb(217,115,13);
	fill: rgb(217,115,13);
}
.block-color-yellow {
	color: rgb(223,171,1);
	fill: rgb(223,171,1);
}
.block-color-teal {
	color: rgb(15,123,108);
	fill: rgb(15,123,108);
}
.block-color-blue {
	color: rgb(11,110,153);
	fill: rgb(11,110,153);
}
.block-color-purple {
	color: rgb(105,64,165);
	fill: rgb(105,64,165);
}
.block-color-pink {
	color: rgb(173,26,114);
	fill: rgb(173,26,114);
}
.block-color-red {
	color: rgb(224,62,62);
	fill: rgb(224,62,62);
}
.block-color-gray_background {
	background: rgb(235,236,237);
}
.block-color-brown_background {
	background: rgb(233,229,227);
}
.block-color-orange_background {
	background: rgb(250,235,221);
}
.block-color-yellow_background {
	background: rgb(251,243,219);
}
.block-color-teal_background {
	background: rgb(221,237,234);
}
.block-color-blue_background {
	background: rgb(221,235,241);
}
.block-color-purple_background {
	background: rgb(234,228,242);
}
.block-color-pink_background {
	background: rgb(244,223,235);
}
.block-color-red_background {
	background: rgb(251,228,228);
}
.select-value-color-default { background-color: rgba(206,205,202,0.5); }
.select-value-color-gray { background-color: rgba(155,154,151, 0.4); }
.select-value-color-brown { background-color: rgba(140,46,0,0.2); }
.select-value-color-orange { background-color: rgba(245,93,0,0.2); }
.select-value-color-yellow { background-color: rgba(233,168,0,0.2); }
.select-value-color-green { background-color: rgba(0,135,107,0.2); }
.select-value-color-blue { background-color: rgba(0,120,223,0.2); }
.select-value-color-purple { background-color: rgba(103,36,222,0.2); }
.select-value-color-pink { background-color: rgba(221,0,129,0.2); }
.select-value-color-red { background-color: rgba(255,0,26,0.2); }

.checkbox {
	display: inline-flex;
	vertical-align: text-bottom;
	width: 16;
	height: 16;
	background-size: 16px;
	margin-left: 2px;
	margin-right: 5px;
}

.checkbox-on {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
}

.checkbox-off {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
}

</style></head><body><article id="5cf715c0-ab1a-4ca3-a4d0-6dadf6590260" class="page sans"><header><img class="page-cover-image" src="https://blog.crowdbotics.com/content/images/2020/05/React-Native-Featured-Image-3.png" style="object-position:center 50%"/><div class="page-header-icon page-header-icon-with-cover"><img class="icon" src="https://blog.crowdbotics.com/content/images/2020/05/React-Native-Featured-Image-3.png"/></div><h1 class="page-title">Integração do React Native com projetos nativos Android e iOS existentes</h1></header><div class="page-body"><p id="dca42afe-d1f4-4a26-a0eb-17a158fe939e" class="">Documentacão de referência </p><figure id="de1d47f6-390a-4356-8299-0b4f00dd667c"><a href="https://reactnative.dev/docs/integration-with-existing-apps#configuring-maven" class="bookmark source"><div class="bookmark-info"><div class="bookmark-text"><div class="bookmark-title">Integration with Existing Apps · React Native</div><div class="bookmark-description">React Native is great when you are starting a new mobile app from scratch. However, it also works well for adding a single view or user flow to existing native applications. With a few steps, you can add new React Native based features, screens, views, etc.</div></div><div class="bookmark-href"><img src="https://reactnative.dev/img/favicon.ico" class="icon bookmark-icon"/>https://reactnative.dev/docs/integration-with-existing-apps#configuring-maven</div></div><img src="https://reactnative.dev/img/logo-og.png" class="bookmark-image"/></a></figure><p id="357d8cad-3ca4-4621-b770-611c204a82c2" class="">Artigo </p><figure id="3576e28b-fe64-47c4-b837-1f53420ff8b1"><a href="https://medium.com/@duytq94/integrating-react-native-with-existing-android-and-ios-native-projects-175cc9517c1" class="bookmark source"><div class="bookmark-info"><div class="bookmark-text"><div class="bookmark-title">Integrating react native with existing Android and iOS native projects</div><div class="bookmark-description">First, you must understand what this bundle file is? It is simply a file containing all your React Native source code (not assets, native dependencies) like js code, styles... When development, the app load this bundle through Metro Bundler on port 8081.</div></div><div class="bookmark-href"><img src="https://medium.com/favicon.ico" class="icon bookmark-icon"/>https://medium.com/@duytq94/integrating-react-native-with-existing-android-and-ios-native-projects-175cc9517c1</div></div><img src="https://miro.medium.com/max/281/1*6OK7FRQLz5YHi3QHHkm06A.png" class="bookmark-image"/></a></figure><p id="ce09956e-444d-4b64-8e39-91c63a0ff6cf" class="">Repositório do projeto</p><figure id="97d2d2c9-bcda-4eaa-9def-c3a7c1974140"><a href="https://github.com/duytq94/demo-integrate-react-native" class="bookmark source"><div class="bookmark-info"><div class="bookmark-text"><div class="bookmark-title">duytq94/demo-integrate-react-native</div><div class="bookmark-description">Demo integrate React Native with existing Android and iOS native projects - duytq94/demo-integrate-react-native</div></div><div class="bookmark-href"><img src="https://github.com/favicon.ico" class="icon bookmark-icon"/>https://github.com/duytq94/demo-integrate-react-native</div></div><img src="https://repository-images.githubusercontent.com/246802752/114bad80-6db2-11ea-8916-2553b064e982" class="bookmark-image"/></a></figure><p id="0f0bf074-3d8e-496e-ab2e-2d3799e226c0" class="">
</p><p id="d2d134ac-26ee-4393-a074-40985ac02b56" class="">
</p><h2 id="bb41f51e-52b9-45dc-a8cb-5be302a709fd" class="">Plataforma de configuração separadamente</h2><p id="01fe4c21-3b3a-4139-b0b9-5d350e41b73d" class="">Antes de começar, crie um projeto em React Native e substitua a pasta Android e ios pelo seu projeto nativo. </p><h1 id="cecdfb7b-8e7f-49f2-bb59-bf42b7724a2c" class="">ANDROID</h1><ul id="5596462a-35d0-4e42-9f65-97443fc1f7b9" class="bulleted-list"><li>Modificar os seguintes arquivos no projeto Android, android/build.gradle, android/app/build.gradle e AndroidManifest.xml</li></ul><ul id="2dad4943-891d-47fd-b40d-b2199346f924" class="bulleted-list"><li>Esta etapa adicionara algumas exigência RN e dependencias nativas no projeto android existente.</li></ul><p id="2435be3d-8dc2-4b40-bc93-6b054756b639" class=""><strong>Adicionando o React native ao seu app</strong></p><p id="68768c31-b229-405b-a386-a7602e836968" class="">1 - Configurando o Maven</p><p id="d548965e-d0d3-4214-a37c-22cedd839199" class="">No build.gradle pasta raiz do projeto adicione as seguintes linhas de código:</p><pre id="5a41a0d0-a05b-4670-8aac-4ba47690bf38" class="code"><code>maven {
    url &quot;$rootDir/../node_modules/react-native/android&quot;
}
maven {
    url(&quot;$rootDir/../node_modules/jsc-android/dist&quot;)
}</code></pre><p id="69845aba-f012-4eaa-ad82-130041597c56" class="">O arquivo deve ficar assim:</p><pre id="f09d834e-cf96-4329-8e5d-9da9a3509b63" class="code"><code>buildscript {
    ext.kotlin_version = &#x27;1.3.71&#x27;
    ext {
        buildToolsVersion = &quot;28.0.2&quot;
        minSdkVersion = 16
        compileSdkVersion = 28
        targetSdkVersion = 27
        supportLibVersion = &quot;28.0.0&quot;
    }
    repositories {
        google()
        jcenter()

    }
    dependencies {
        classpath &#x27;com.android.tools.build:gradle:3.6.2&#x27;
        classpath &quot;org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version&quot;
    }
}

allprojects {
    repositories {
				 maven {
            url &quot;$rootDir/../node_modules/react-native/android&quot;
        }
        maven {
            url(&quot;$rootDir/../node_modules/jsc-android/dist&quot;)
        }
        google()
        jcenter()
    }
}

task clean(type: Delete) {
    delete rootProject.buildDir
}</code></pre><p id="de5a6c19-c5ca-4a21-800b-ceb84132c9ed" class="">
</p><p id="f54953b2-4830-4f0d-bb8c-c8006dfd07cf" class=""><strong>No build.gradle no caminho android/app/build.gradle</strong></p><p id="89fabab4-0652-436a-b407-600566ca7e05" class="">Adicione as seguintes linhas de código:</p><ul id="1317c105-d3e0-4d75-ab49-2c091e602c35" class="bulleted-list"><li>No top do aquivo </li></ul><pre id="d3d7c2f2-d949-4301-9e0a-ae60b418bf62" class="code"><code>project.ext.react = [
        entryFile   : &quot;index.js&quot;,
        enableHermes: false,
]
apply from: &quot;../../node_modules/react-native/react.gradle&quot;
def jscFlavor = &#x27;org.webkit:android-jsc:+&#x27;
def enableHermes = project.ext.react.get(&quot;enableHermes&quot;, false);</code></pre><ul id="7dee0b35-b95e-40e8-943b-29aa5f330771" class="bulleted-list"><li>Dentro de dependencies</li></ul><pre id="a67f4608-b39e-4db7-93df-c88330ffdd58" class="code"><code>dependencies {
		implementation &quot;com.facebook.react:react-native:+&quot;
    implementation &quot;org.webkit:android-jsc:+&quot;
    implementation project(&#x27;:react-native-safe-area-context&#x27;)
}</code></pre><ul id="bd5ea65f-b5e0-4e7b-a128-2a7f22415e46" class="bulleted-list"><li>No final do arquivo adicione </li></ul><pre id="833e55ea-9120-4d2d-a025-eb0574c7b461" class="code"><code>apply from: file(&quot;../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle&quot;); applyNativeModulesAppBuildGradle(project)</code></pre><p id="d285fbcf-5027-4029-975d-9af35ed83a34" class="">
</p><pre id="51331245-13c1-4f33-87ae-c456dadf7cd9" class="code"><code>apply plugin: &#x27;com.android.application&#x27;
apply plugin: &#x27;kotlin-android-extensions&#x27;
apply plugin: &#x27;kotlin-android&#x27;

project.ext.react = [
        entryFile   : &quot;index.js&quot;,
        enableHermes: false,  // clean and rebuild if changing
]
apply from: &quot;../../node_modules/react-native/react.gradle&quot;
def jscFlavor = &#x27;org.webkit:android-jsc:+&#x27;
def enableHermes = project.ext.react.get(&quot;enableHermes&quot;, false);

android {
    compileSdkVersion rootProject.ext.compileSdkVersion
    buildToolsVersion rootProject.ext.buildToolsVersion

    defaultConfig {
        applicationId &quot;com.example.demointegratern&quot;
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode 1
        versionName &quot;0.0.1&quot;

        testInstrumentationRunner &quot;androidx.test.runner.AndroidJUnitRunner&quot;
    }

    signingConfigs {
        debug {
            keyAlias &#x27;KeyAlias&#x27;
            keyPassword &#x27;android&#x27;
            storeFile file(&quot;keystore/demointegratern.keystore&quot;)
            storePassword &#x27;android&#x27;
        }
        release {
            keyAlias &#x27;KeyAlias&#x27;
            keyPassword &#x27;android&#x27;
            storeFile file(&quot;keystore/demointegratern.keystore&quot;)
            storePassword &#x27;android&#x27;
        }
    }

    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile(&#x27;proguard-android-optimize.txt&#x27;), &#x27;proguard-rules.pro&#x27;
        }
    }

}

dependencies {
    implementation &quot;com.facebook.react:react-native:+&quot;
    implementation &quot;org.webkit:android-jsc:+&quot;
    implementation project(&#x27;:react-native-safe-area-context&#x27;)
}

apply from: file(&quot;../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle&quot;); applyNativeModulesAppBuildGradle(project)</code></pre><h3 id="dea05e91-215a-449c-a565-e4da8896c619" class="">Habilitar autolinking de módulos nativos </h3><p id="31fccffd-7925-445e-a0ce-2f84fed6f7d5" class="">Para usar o poder do <a href="https://github.com/react-native-community/cli/blob/master/docs/autolinking.md">autolinking</a> , temos que adicione a seguinte entrada a <code>settings.gradle</code>:</p><pre id="165d92b5-4fe4-43ee-80b9-d092d8281345" class="code"><code>apply from: file(&quot;../node_modules/@react-native-community/cli-platform-android/native_modules.gradle&quot;); applyNativeModulesSettingsGradle(settings)</code></pre><h3 id="6e29edba-80c5-4af9-8c23-bba0966c0b3c" class="">Configurando permissões </h3><p id="a343a64a-522e-4e42-8c85-137aed9c42c2" class="">Em seguida, verifique se você tem permissão de Internet em <code>AndroidManifest.xml</code>:</p><p id="6a1e9bc1-fb30-4c58-986a-f8b505e4725e" class="">Caso ainda não tenha as permissões, adicione as seguintes linhas no AndroidManifest.xml </p><pre id="fb66c728-cd6c-4bc5-a14d-8cfe380fd4b5" class="code"><code>&lt;uses-permission android:name=&quot;android.permission.INTERNET&quot; /&gt;
&lt;uses-permission android:name=&quot;android.permission.SYSTEM_ALERT_WINDOW&quot; /&gt;</code></pre><p id="c7a86f6b-5772-4686-915a-d82dcdb3ecd1" class="">Isso só é usado no modo de desenvolvimento ao recarregar o JavaScript do servidor de desenvolvimento, portanto, você pode remover isso nas compilações de lançamento, se necessário.</p><h2 id="9deb8209-9b83-465d-a103-f6402e475f86" class="">Navegar para RN a partir do código nativo </h2><p id="a7489dbb-f17a-40ec-806a-0cda02121089" class="">A partir do Android 9 (API de nível 28), o tráfego de texto não criptografado está desabilitado por padrão; isso evita que seu aplicativo se conecte ao empacotador RN. As alterações abaixo permitem o tráfego de texto não criptografado em compilações de depuração.</p><p id="3c11d1e8-062c-46bb-8b53-1dadafc89680" class="">Adicione a usesCleartextTrafficopção ao seu AndroidManifest.xml</p><pre id="156664a6-48aa-4482-a210-b79f1177521e" class="code"><code> android:usesCleartextTraffic=&quot;true&quot;
 tools:targetApi=&quot;28&quot;</code></pre><p id="8da91f9c-3ba8-43e9-8ab1-7dceeb5c5e8f" class="">
</p><ul id="a38a9f1d-600f-410e-ad4b-5db68f31d678" class="bulleted-list"><li>AndroidManifest.xml</li></ul><pre id="db229188-47bb-4154-bd7a-7de5e6d3e33a" class="code"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;manifest xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;
    xmlns:tools=&quot;http://schemas.android.com/tools&quot;
    package=&quot;com.example.demointegratern&quot;&gt;

    &lt;uses-permission android:name=&quot;android.permission.INTERNET&quot; /&gt;
    &lt;uses-permission android:name=&quot;android.permission.SYSTEM_ALERT_WINDOW&quot; /&gt;

    &lt;application
        android:allowBackup=&quot;true&quot;
        android:icon=&quot;@mipmap/ic_launcher&quot;
        android:label=&quot;@string/app_name&quot;
        android:roundIcon=&quot;@mipmap/ic_launcher_round&quot;
        android:supportsRtl=&quot;true&quot;
        android:theme=&quot;@style/AppTheme&quot;
        android:usesCleartextTraffic=&quot;true&quot;
        tools:targetApi=&quot;28&quot;&gt;
        &lt;activity
            android:name=&quot;.MainActivity&quot;
            android:theme=&quot;@style/Theme.AppCompat.Light.NoActionBar&quot;&gt;
            &lt;intent-filter&gt;
                &lt;action android:name=&quot;android.intent.action.MAIN&quot; /&gt;

                &lt;category android:name=&quot;android.intent.category.LAUNCHER&quot; /&gt;
            &lt;/intent-filter&gt;
        &lt;/activity&gt;
        &lt;activity
            android:name=&quot;.RNModuleActivity&quot;
            android:label=&quot;@string/app_name&quot;
            android:theme=&quot;@style/Theme.AppCompat.Light.NoActionBar&quot; /&gt;
        &lt;activity
            android:name=&quot;.SecondActivity&quot;
            android:theme=&quot;@style/Theme.AppCompat.Light.NoActionBar&quot; /&gt;
    &lt;/application&gt;

&lt;/manifest&gt;</code></pre><h2 id="f1cc3a6f-aab7-4619-9e73-0c1cf0477eea" class="">Incorporar o RN ao código nativo</h2><ul id="b70d4828-ca81-45f1-b057-c511cb2ac359" class="bulleted-list"><li>Crie outro Activity que contém um aplicativo RN dentro dela. </li></ul><pre id="9d24ec6c-af6f-4e4c-8d67-1eb3cb793881" class="code"><code>package br.com.sysmobil.triiboclient.ui

import android.app.Activity
import android.os.Bundle
import android.view.KeyEvent
import androidx.appcompat.app.AppCompatActivity
import br.com.sysmobil.triiboclient.BuildConfig AQUI DEVE SER O BUILD-CONFIG DO PROJETO
import com.facebook.react.ReactActivity
import com.facebook.react.ReactFragmentActivity
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactRootView
import com.facebook.react.common.LifecycleState
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler
import com.facebook.react.shell.MainReactPackage
import com.facebook.soloader.SoLoader
import com.oblador.vectoricons.VectorIconsPackage
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage
import com.swmansion.reanimated.ReanimatedPackage
import com.swmansion.rnscreens.RNScreensPackage
import com.th3rdwave.safeareacontext.SafeAreaContextPackage


class RNModuleActivity : AppCompatActivity(), DefaultHardwareBackBtnHandler {
    private var mReactRootView: ReactRootView? = null
    private var mReactInstanceManager: ReactInstanceManager? = null
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        SoLoader.init(this, false)

        // If not, navigation.goBack() not working
        mReactRootView = RNGestureHandlerEnabledRootView(this)
        // mReactRootView = new ReactRootView(this)
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(application)
                .setCurrentActivity(this)
                .setBundleAssetName(&quot;index.android.bundle&quot;)
                .setJSMainModulePath(&quot;index&quot;)
                .addPackage(RNGestureHandlerPackage())
                .addPackage(RNScreensPackage())
                .addPackage(SafeAreaContextPackage())
                .addPackage(ReanimatedPackage())
                .addPackage(MainReactPackage())
                .addPackage(VectorIconsPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build()
        // Send message from native code
        val initialProperties = Bundle()
        initialProperties.putString(&quot;message_from_native&quot;, intent?.extras?.get(&quot;message_from_native&quot;)?.toString())
        (mReactRootView as RNGestureHandlerEnabledRootView).startReactApplication(mReactInstanceManager, &quot;TriiboReactNative&quot;, initialProperties)
        setContentView(mReactRootView)
    }

    override fun invokeDefaultOnBackPressed() {
        super.onBackPressed()
    }

    override fun onPause() {
        super.onPause()
        if (mReactInstanceManager != null) {
            mReactInstanceManager!!.onHostPause(this)
        }
    }

    override fun onResume() {
        super.onResume()
        if (mReactInstanceManager != null) {
            mReactInstanceManager!!.onHostResume(this, this)
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        if (mReactInstanceManager != null) {
            mReactInstanceManager!!.onHostDestroy(this)
        }
        if (mReactRootView != null) {
            mReactRootView!!.unmountReactApplication()
        }
    }

    override fun onBackPressed() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager!!.onBackPressed()
        } else {
            super.onBackPressed()
        }
    }

    override fun onKeyUp(keyCode: Int, event: KeyEvent): Boolean {
        if (keyCode == KeyEvent.KEYCODE_MENU &amp;&amp; mReactInstanceManager != null) {
            mReactInstanceManager!!.showDevOptionsDialog()
            return true
        }
        return super.onKeyUp(keyCode, event)
    }
}

   </code></pre><ul id="e8d94be0-8a96-4a64-821a-658299273ac4" class="bulleted-list"><li>Declare esta activity no AndroidManifest.xml</li></ul><pre id="7a0f1956-151e-4021-a5b2-1baf46054c58" class="code"><code>&lt;activity
  android:name=&quot;.RNModuleActivity&quot;
  android:label=&quot;@string/app_name&quot;
  android:theme=&quot;@style/Theme.AppCompat.Light.NoActionBar&quot;
/&gt;</code></pre><h3 id="31bf409c-1ad5-4999-8902-375ba8c582f4" class="">MainActivity:</h3><pre id="2a542755-bce1-4e98-ac26-0cc99735bbc8" class="code"><code>import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val btnGoRNScreen = findViewById&lt;Button&gt;(R.id.btnGoRNScreen)
        val edt = findViewById&lt;EditText&gt;(R.id.editText)
        btnGoRNScreen.setOnClickListener {
            val intent = Intent(this@MainActivity, RNModuleActivity::class.java)
            intent.putExtra(&quot;message_from_native&quot;, edt.text)
            startActivity(intent)
        }
    }
}</code></pre><h2 id="5cb18144-3036-4a52-b60c-dac4501f5a94" class="">Crie um módulo nativo para verificar a capacidade de comunicação entre js e código nativo</h2><p id="52bf5100-9fa9-4020-8c98-0f31bd0b558d" class="">Módulo: contém todas as funções junto com o código lógico</p><pre id="aa354c03-7c0d-421a-9e3b-a3d64862d766" class="code"><code>class  TestConnectNativeModule construtor interno ( private  val  reactContext :  ReactApplicationContext ): ReactContextBaseJavaModule (reactContext) {
    sobrescrever  fun  getName (): String {
        retornar  &quot; TestConnectNative &quot;
    }

    @ReactMethod
    fun  sendMessageToNative ( rnMessage :  String? ) {
        Log .d ( &quot; Este log é de java &quot; , rnMessage)
    }

    @ReactMethod
    divertido  sendCallbackToNative ( rnCallback :  Callback ) {
        rnCallback.invoke ( &quot; Uma saudação de java &quot; )
    }

    @ReactMethod
    fun  finishActivity () {
        if (currentActivity ! =  null ) {
            currentActivity !! .Finalizar()
        }
    }

    @ReactMethod
    divertido  goToSecondActivity () {
        if (currentActivity ! =  null ) {
            val intent =  Intent (currentActivity, SecondActivity :: class .java)
            currentActivity !! .startActivity (intent)
        }
    }

     objeto companheiro

}</code></pre><p id="80c95f72-940b-4455-b11c-13d4866166f6" class="">Pacote: registre o módulo como disponível a partir de js</p><pre id="1c26a9ce-80ef-46b6-9080-5ba6e26a0d26" class="code"><code>class  TestConnectNativePackage : ReactPackage {
    override  fun  createViewManagers ( reactContext :  ReactApplicationContext ): List &lt; ViewManager &lt; * , * &gt;&gt; {
        return emptyList ()
    }

    override  fun  createNativeModules ( reactContext :  ReactApplicationContext ): List &lt; NativeModule &gt; {
        módulos val :  MutableList &lt; NativeModule &gt; =  ArrayList ()
        modules.add ( TestConnectNativeModule (reactContext))
        módulos de retorno
    }
}</code></pre><h2 id="765f4f9d-31cd-4ef4-8685-f63d289b1c1d" class="">Saia do RN para voltar ao código nativo</h2><p id="1bb2d153-f4a6-4498-84e1-321d37e18553" class="">Facilmente feito por recursos integrados com <code>BackHandler.exitApp()</code></p><p id="32eaafa1-c8bf-455d-a67b-172feccf0f25" class="">Ou você pode usar o <code>getCurrentActivity().finish()</code>código kotlin (verificando o código no <code>TestConnectNativeModule.kt</code>arquivo),</p><pre id="8b806e04-dc00-4ce1-bfb2-cd1bdcc3de2d" class="code"><code>@ReactMethod
    fun finishActivity() {
        if (currentActivity != null) {
            currentActivity!!.finish()
        }
    }</code></pre><h2 id="aec00bc1-0c9a-49a6-9a2e-2870fe425901" class="">Navegue do Rn para uma outra visualização nativa</h2><p id="58ace5b4-1530-4cf8-a3e1-25fd9894c515" class="">Usando getCurrentActivity(), inicie um intent (verificando o código no TestConnectNativeModule.ktarquivo).</p><pre id="5a19041a-388e-4d16-a5b0-b1c5c05ff6d4" class="code"><code>@ReactMethod
    fun goToSecondActivity() {
        if (currentActivity != null) {
            val intent = Intent(currentActivity, SecondActivity::class.java)
            currentActivity!!.startActivity(intent)
        }
    }</code></pre><p id="0a3585e0-75de-491b-9a2b-72116cfe4026" class="">
</p><h1 id="4af06943-cc39-4cc2-bcb3-f983d789339e" class="">IOS</h1><p id="f85923e4-d876-4c0f-a1c3-9d9200878a75" class="">No arquivo Podfile, adicione as seguintes linhas:</p><ul id="3fab8733-2af0-439c-9298-2dc71cf3f025" class="bulleted-list"><li>No top do arquivo</li></ul><pre id="5c3ac294-7b28-4c40-93a6-46cd3d4948b1" class="code"><code>require_relative &#x27;../node_modules/react-native/scripts/react_native_pods&#x27;
require_relative &#x27;../node_modules/@react-native-community/cli-platform-ios/native_modules&#x27;</code></pre><pre id="bd5bedc5-b7b4-4749-92c5-12bb06e21126" class="code"><code>pre_install do |installer|
        installer.pod_targets.each do |pod|
          if pod.name.eql?(&#x27;RNScreens&#x27;) || pod.name.eql?(&#x27;RNCMaskedView&#x27;)
            def pod.build_type
              Pod::BuildType.static_library
            end
          end
         end
       end
    # use_unimodules!
    config = use_native_modules!

    use_react_native!(:path =&gt; config[&quot;reactNativePath&quot;])</code></pre><p id="96b6a783-2204-4ab5-a4f9-59a315ff9f4b" class="">Após modificar o Podfile adicionando as dependências do React native, rode o seguinte comando no terminal dentro da pasta ios:</p><p id="d8ed8dbe-88bf-4ef2-8bd1-f7430fa8324a" class="">Nessa etapa é preciso ter instalado na máquina o cocoapods que é uma lib de gerenciamento de dependências do mac Os.</p><pre id="3bd9d8aa-5b0a-4dbc-ad0f-cd986b7012d9" class="code"><code>pod install </code></pre><p id="2111bd42-9914-4aac-8fa3-b5b3142214a1" class="">Ao execultar o comando acima, todas as dependências do React Native sera adicionadas ao pods do app.</p><p id="adae2a63-85ff-4830-acb9-f45a5f1bcb4b" class="">
</p><h2 id="c9cd610b-dcdd-41b6-85da-f97f352c71bc" class="">Navegue para RN a partir do código nativo</h2><p id="fbbf5e3a-3294-4628-8f00-2b010c591248" class="">Adicone o seguinte arquivo no projeto nativo IOS, que sera a ViewController do React Native</p><p id="eaf440db-e12f-423a-9da8-e64a613079c4" class="">
</p><pre id="7bfe19a4-3206-42f6-97de-7cadbb9953eb" class="code"><code>class ViewController: UIViewController {
    @IBOutlet weak var textField: UITextField!

    @IBAction func BtnGoReactView(_ sender: Any) {
        let messageFromNative: String = textField.text!

        let rootView = RNViewManager.sharedInstance.viewForModule(
            &quot;Nome do seu projeto React native&quot;,
            initialProperties: [&quot;message_from_native&quot;: messageFromNative])

        let reactNativeVC = UIViewController()
        reactNativeVC.view = rootView
        reactNativeVC.modalPresentationStyle = .fullScreen
        present(reactNativeVC, animated: true)
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        self.hideKeyboardWhenTappedAround()
    }

    func hideKeyboardWhenTappedAround() {
        let tap = UITapGestureRecognizer(target: self.view, action: #selector(UIView.endEditing))
        tap.cancelsTouchesInView = false
        view.addGestureRecognizer(tap)
    }
}</code></pre><p id="0a8100f5-9ca8-4bc2-a0f0-2b6a2b03f8d0" class="">
</p><p id="9207a936-9aec-4c60-98bf-d7b95e100ed5" class="">A Apple bloqueou o carregamento implícito de recursos HTTP de texto não criptografado. Portanto, precisamos adicionar NSAppTransportSecuritya Info.plist</p><pre id="e1fd9700-16e6-48a0-b2ee-2a8cd5c38cd0" class="code"><code>&lt;key&gt;NSAppTransportSecurity&lt;/key&gt;
&lt;dict&gt;
    &lt;key&gt;NSExceptionDomains&lt;/key&gt;
    &lt;dict&gt;
        &lt;key&gt;localhost&lt;/key&gt;
        &lt;dict&gt;
            &lt;key&gt;NSTemporaryExceptionAllowsInsecureHTTPLoads&lt;/key&gt;
            &lt;true/&gt;
        &lt;/dict&gt;
    &lt;/dict&gt;
&lt;/dict&gt;</code></pre><p id="d3b5573e-b640-48c5-a669-4af72a551d80" class="">
</p><h2 id="c994148a-ff2b-45d0-b1c6-4c033a93bcb0" class="">Crie um módulo nativo para verificar a capacidade de comunicação entre js e código nativo</h2><p id="22a982b7-9055-45c3-aba9-75e1145009de" class="">Para testar esses recursos, criaremos um módulo denominado TestConnectNative para fazer 2 coisas</p><p id="66d2c7b5-5877-4c69-b1e6-de4ce2685d9f" class="">1 - Envie uma mensagem para o código nativo e mostre o registro deles (código swift).</p><p id="65112291-d6b9-49b4-a897-30cdd2d8e5eb" class="">2 - Envie um retorno de chamada para o código nativo e receba um valor de retorno no código js.</p><p id="2ab216bf-e532-403f-bfd0-7aaf864b3e27" class="">Chame a função nativa para dispensar visualizações RN (iOS).</p><p id="614eeb53-abc3-48ae-b1d1-fc04774873a4" class="">
</p><p id="8a15ce4a-13a4-4ffb-95c5-c975d80e4862" class="">Com o iOS, um módulo nativo também precisa de 2 arquivos com o mesmo conceito Android:</p><p id="b14528bd-7074-4f84-be1f-1c387a51d53c" class="">.swift: contém todas as funções junto com o código lógico</p><pre id="9a2d3df3-9f7b-475a-a2e5-062c4ab604e6" class="code"><code>@objc(TestConnectNativeModule)
class TestConnectNativeModule: NSObject {
    @objc
    static func requiresMainQueueSetup() -&gt; Bool {
        return true
    }

    @objc
    func sendMessageToNative(_ rnMessage: String) {
        print(&quot;This log is from swift: \(rnMessage)&quot;)
    }

    @objc
    func sendCallbackToNative(_ rnCallback: RCTResponseSenderBlock) {
        rnCallback([&quot;A greeting from swift&quot;])
    }

    @objc
    func goToSecondViewController (_ reactTag: NSNumber) {
        DispatchQueue.main.async {
            if let view = RNViewManager.sharedInstance.bridge?.uiManager.view(forReactTag: reactTag) {
                let storyBoard : UIStoryboard = UIStoryboard(name: &quot;Main&quot;, bundle:nil)
                let secondVC = storyBoard.instantiateViewController(withIdentifier: &quot;SecondView&quot;) as! SencondViewController
                secondVC.modalPresentationStyle = .fullScreen

                let reactNativeVC: UIViewController! = view.reactViewController()
                reactNativeVC.present(secondVC, animated: true, completion: nil)
            }
        }
    }

    @objc
    func dismissViewController (_ reactTag: NSNumber) {
        DispatchQueue.main.async {
            if let view = RNViewManager.sharedInstance.bridge?.uiManager.view(forReactTag: reactTag) {
                let reactNativeVC: UIViewController! = view.reactViewController()
                reactNativeVC.dismiss(animated: true, completion: nil)
            }
        }
    }
}</code></pre><p id="04133b80-7ca1-406f-a6d0-347f7e974ee5" class="">
</p><p id="41789bdc-6dae-4a8e-b545-53be4cd7af69" class="">.m: arquivo Objective-C para expor seus métodos a js</p><pre id="b81b6315-d29e-4f20-a94b-9d9484ad26af" class="code"><code>#import &lt;React/RCTBridgeModule.h&gt;

@interface RCT_EXTERN_REMAP_MODULE(TestConnectNative, TestConnectNativeModule, NSObject)

RCT_EXTERN_METHOD(sendMessageToNative: (NSString)rnMessage)
RCT_EXTERN_METHOD(sendCallbackToNative: (RCTResponseSenderBlock)rnCallback)
RCT_EXTERN_METHOD(goToSecondViewController: (nonnull NSNumber *)reactTag)
RCT_EXTERN_METHOD(dismissViewController: (nonnull NSNumber *)reactTag)

@end</code></pre><p id="4a57b17c-5887-4f62-9c6b-8af8fff54481" class="">
</p><p id="e11e80bd-93a6-49aa-9a71-b4f4457953e4" class="">Além disso, temos o arquivo .h, depois de criar o arquivo Swift, você deve ser solicitado a escolher se deseja <em>configurar um cabeçalho de ponte Objective-C. </em>Não altere esse nome manualmente, porque o Xcode configura o projeto com esse nome de arquivo exato.</p><p id="63299cbe-c770-4bee-a36e-10a0a0388876" class="">Edite este arquivo de cabeçalho como abaixo</p><pre id="39e5de27-ef34-476e-a27e-67ad6310477b" class="code"><code>#import &lt;React/RCTBridgeModule.h&gt;
#import &lt;React/RCTViewManager.h&gt;
#import &lt;React/RCTBridge.h&gt;
#import &lt;React/RCTUIManager.h&gt;</code></pre><p id="e99bd5f7-dc66-4a48-ad0b-6e5be16cada6" class="">
</p><h1 id="ab0ae2ba-2d14-42ad-9b3c-a3e5f18aeaa9" class="">React native </h1><h2 id="070cdb71-5555-4ee8-887d-58c40373e3e5" class=""><strong>Crie recursos de wrapper no RN para chamar a partir do código js</strong></h2><p id="c16d0e8c-05df-425e-9111-6e1cca173cd0" class="">Isso não é necessário, mas evita que os consumidores de sua biblioteca precisem <em>extraí-</em> la do <em>NativeModules</em> todas as vezes. Esse arquivo JavaScript também se torna um bom local para você adicionar qualquer funcionalidade secundária do JavaScript.</p><pre id="587f9397-6b51-4f7e-a1e2-5b79da3d6996" class="code"><code>import {NativeModules, Platform} from &#x27;react-native&#x27;;

const testConnectNative = NativeModules.TestConnectNative;

const TestConnectNative = {
  sendMessage: msg =&gt; {
    testConnectNative.sendMessageToNative(msg);
  },

  sendCallback: callback =&gt; {
    testConnectNative.sendCallbackToNative(callback);
  },

  exitRN: tag =&gt; {
    if (Platform.OS === &#x27;ios&#x27;) {
      testConnectNative.dismissPresentedViewController(tag);
    } else {
      testConnectNative.finishActivity();
    }
  },
};

export default TestConnectNative;</code></pre><p id="d791cbfe-ac31-4f7e-a045-77b524ab0f6a" class="">
</p><p id="0baa07e2-ed69-4fdc-a8dc-e29e01ddde40" class="">Agora, a partir do seu outro arquivo js, você pode chamar o método assim</p><pre id="a63a2137-2136-4290-8eed-feed58d147ab" class="code"><code>// Send a message to native code
TestConnectNative.sendMessage(this.state.messageToNative);
// Send a callback to native code and receive a message from it
TestConnectNative.sendCallback((nativeMessage) =&gt; {
  console.log(`This log is from js code callback with native message: &quot;${nativeMessage}&quot;`);
});
// Exit RN to go back to native
TestConnectNative.exitRN(rootTag);</code></pre><h2 id="039a02ad-11fa-4c7a-9c13-f42410297e0a" class="">Voltando para o código nativo</h2><p id="c463774c-7c65-4419-8c92-f7995eac1fcc" class="">Não criaremos RCTRootView por meio de, <code>bundleURL</code>mas por meio <code>bridge</code>de, para que possamos reutilizar essa ponte para dispensar ou navegar em ViewController mais tarde.</p><p id="d640e3e5-730f-4c94-9384-2cbfa7efe038" class="">Crie um nome de arquivo <code>RNViewManager.swift</code>para lidar com a visualização de reação da raiz de carregamento e controlar a ponte.</p><p id="956fe7f9-e359-4bb3-a921-592dae6d31e8" class="">
</p><pre id="da136bd4-d3cd-4233-a0b6-4db4cae365f8" class="code"><code>class RNViewManager: NSObject {
    var bridge: RCTBridge?

    static let sharedInstance = RNViewManager()

    func createBridgeIfNeeded() -&gt; RCTBridge {
        if bridge == nil {
            bridge = RCTBridge.init(delegate: self, launchOptions: nil)
        }
        return bridge!
    }

    func viewForModule(_ moduleName: String, initialProperties: [String : Any]?) -&gt; RCTRootView {
        let viewBridge = createBridgeIfNeeded()
        let rootView: RCTRootView = RCTRootView(
            bridge: viewBridge,
            moduleName: moduleName,
            initialProperties: initialProperties)
        return rootView
    }
}

extension RNViewManager: RCTBridgeDelegate {
    func sourceURL(for bridge: RCTBridge!) -&gt; URL! {
        #if DEBUG
            return URL(string: &quot;http://localhost:8081/index.bundle?platform=ios&quot;)
        #else
            return Bundle.main.url(forResource: &quot;main&quot;, withExtension: &quot;jsbundle&quot;)
        #endif
    }</code></pre><p id="45e146ae-7e32-46f1-aef5-46065d48d3fa" class="">
</p><h2 id="26f36f81-f5f5-4cb3-a08e-c82453c17b4e" class="">Criar uma versão de lançamento</h2><p id="8508d6dc-1677-44a0-a0aa-39232f14e1e1" class="">
</p><p id="8c7af8d9-46e5-46f6-bda2-6ae8c28028b5" class="">Primeiro, você deve entender o que é esse arquivo de pacote? É simplesmente um arquivo contendo todo o seu <strong>código-fonte React Native</strong> como código js, estilos etc...</p><p id="f06f1c13-3be2-4fab-8849-dad266d6cb0f" class="">Durante o desenvolvimento, o aplicativo carrega esse pacote por meio do <em>Metro Bundler na porta 8081</em> . Mas, na produção, você deve usar um arquivo de pacote <strong>offline</strong> para representar o aplicativo, empacotando-os em um único arquivo.</p><p id="87b4cbaf-1a55-49e1-b8c3-d8aaebe6e9ae" class="">A ideia geral é que, na produção, o aplicativo nativo tratará o RN como ativos e carregará esse recurso por meio de um arquivo bundle.</p><h2 id="8f4c3edb-6194-4fb6-87da-ae0dea6528cd" class="">Android</h2><p id="3e3313f5-a8fa-4638-817d-eec1f22b7f7f" class="">Na pasta raiz do projeto React native pelo terminal rode o seguinte comando:</p><pre id="19918770-6198-4205-b295-70d5deb6fd83" class="code"><code>npm run react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res</code></pre><p id="d91d1ae4-c46a-4f9a-8ee1-bee3c686cc5e" class="">Pronto, agora é só gerar o apk pelo Android studio, que o pacote do React Native vai ser carregado.</p><p id="3baffc60-1186-49ed-bfd1-96ed7554e295" class="">
</p><h2 id="83e7caef-256a-491c-a66e-f5090b31a828" class="">IOS</h2><p id="433d6387-feaf-471a-828e-21b9e3d24196" class="">Na pasta raiz do projeto React native pelo terminal rode o seguinte comando:</p><pre id="da4ceeb3-b61d-46a0-be93-995b8f26eb4e" class="code"><code>npm run react-native bundle --platform ios --dev false --entry-file index.js --bundle-output ios/main.jsbundle --assets-dest ios</code></pre><p id="5463b073-8d03-468a-9651-642559affa04" class="">O comando acima ira criar dois arquivos o (assest e main.jsbundle).</p><p id="82dcff3f-d226-4971-91e8-4c61a3c30e5b" class="">Copie os dois aquivos recem criado para a paras do projeto.</p><p id="e7655fa6-cd3b-469a-88d4-50b69f1a603f" class="">
</p><figure id="8e1a4573-cbfb-415b-943a-28c296bd20b0" class="image"><a href="Integrac%CC%A7a%CC%83o%20do%20React%20Native%20com%20projetos%20nativos%20%208e1a4573cbfb415b943a28c296bd20b0/image-main.jsbundle.png"><img style="width:300px" src="Integrac%CC%A7a%CC%83o%20do%20React%20Native%20com%20projetos%20nativos%20%208e1a4573cbfb415b943a28c296bd20b0/image-main.jsbundle.png"/></a></figure><p id="b8886428-3507-40e3-b6f0-db692a8197cc" class="">
</p></div></article></body></html>
