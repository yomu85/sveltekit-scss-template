# sveltekit-netlify-app
sveltekit에 autoprefixer, sass, 경로 별칭을 셋팅한 템플릿입니다.
  
## Packages
+ svelteKit: SvelteKit은 컴파일러를 사용하는 UI 프레임워크인 Svelte를 기반으로 제작되어 브라우저에서 최소한의 작업을 수행하는 놀랍도록 간결한 구성 요소를 작성할 수 있습니다.
+ autoprefixer: CSS에 자동으로 공급 업체 접두사(Vendor prefix)를 적용합니다.
+ postcss: CSS 후처리 패키지로 autoprefixer를 사용하기 위해 설치합니다.
+ sass: scss파일을 CSS로 컴파일해주는 도구입니다.
+ svelte-preprocess: Babel, PostCss, Sass(Scss) 등 전/후 처리기들을 지원합니다.


```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
