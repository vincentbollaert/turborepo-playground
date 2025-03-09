import styles from "./home.module.scss";

export const Learnings = () => {
  return (
    <div className={styles.learningsTab} data-testid="learnings">
      <h2 id="monorepos">
        <a href="#monorepos">#</a>
        Monorepos are cool
      </h2>
      <p>
        Project setup takes longer, but this is weighed against the proper separation of concerns
        that monorepos enforce, as well as build time performance gains something like Turborepo
        offers
      </p>
      <h2 id="tailwind">
        <a href="#tailwind">#</a>Tailwind doesn&apos;t scale
      </h2>
      <p>
        I was against Tailwind from the start, without having ever tried it. During this project, I
        gave it an honest go, with the help of Shadcn and v0 for AI gen. It gets you
        &apos;somewhere&apos; a lot quicker, but what you&apos;re left with is markup that makes no
        sense and cannot be debugged easily via dev tools.
      </p>
      <p>
        Utility classes are a useful addition when used for utility purposes (spacing, theming,
        etc.). But when used to style everything, they severely impact your ability to productively
        maintain and scale your frontend codebase.
      </p>
      <p>What I&apos;ve found works great, is to</p>
      <ul>
        <li>
          create your own theme variables with the help of OpenProps (colors, shadows, animations,
          fonts, etc)
        </li>
        <li>with Radix primitives</li>
        <li>
          with PostCSS to turn these variables into classes for one-offs, and strip unused styles
        </li>
        <li>with CSS Modules for namespacing</li>
      </ul>
      <p>
        Radix lets you copy code examples with CSS Modules styles, which gives a good starting off
        point. The benefit is that you&apos;re able to more effectively wrangle those styles into
        what you want.
      </p>
      <h2 id="modern-configs">
        <a href="#modern-configs">#</a>Configuring modern ESlint and TS configs is still a PITA
      </h2>
      <p>There are a number of compounding forces contributing to this</p>
      <ul>
        <li>
          the latest version of ESlint isn&apos;t backwards compatible and drastically changes the
          way you write your configs
        </li>
        <li>extending from base configs requires an ungodly amount of prop spreading</li>
        <li>the endless array of recommended plugins and rules is hard to follow</li>
      </ul>
      <p>The fix would be to</p>
      <ul>
        <li>
          spend time piecing together good base and extension configs and use Immer or deepmerge to
          help manage it
        </li>
        <li>
          rely on an opinionated 3rd-party config like alloyTeam/eslint-config-alloy or
          antfu/estlint-config
        </li>
      </ul>
      <h2 id="compiling-packages">
        <a href="#compiling-packages">#</a>Packages should not be compiled unless you&apos;re
        planning to host them
      </h2>
      <p>
        It&apos;s tempting to compile packages, especially the UI package, as they can then be
        cached. But modern bundlers expect monorepo packages to be in ESM format, and minimal
        transformation is needed (JSX to JS) before the browser can render your React components.
      </p>
      <p>
        The additional complexity and build steps required during development meant that, in my
        case, serving packages as-is reduced compile time from a couple seconds to instant
      </p>
      <h2 id="jest-in-monorepos">
        <a href="#jest-in-monorepos">#</a>The time of Jest is over
      </h2>
      <p>
        jest was the go-to test runner for years, but it doesn&apos;t play well with modern tools
      </p>
      <ul>
        <li>it doesn&apos;t understand the concept of local monorepo packages</li>
        <li>it&apos;s slow</li>
        <li>struggles with module resolution</li>
        <li>and configurations becomes overly complex in order to deal with these issues</li>
      </ul>
      <p>
        Vitest, on the other hand, was effortless to set up, has a great DX (auto-watching test
        files you make changes to) and is blazingly fast
      </p>
      <h2 id="start-simple">
        <a href="#start-simple">#</a>Start simple
      </h2>
      <p>
        For longer than I care to admit, I was stuck trying to get MSW to properly intercept request
        handlers in my tests. As it turns out, it was a React Query api client lib I was using that
        was incompatible with MSW.
      </p>
      <p>
        Note to self: When dealing with libs that offer abstractions, first piece everything
        together yourself if this is an area you are unfiliar with
      </p>
    </div>
  );
};
