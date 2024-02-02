import {Content} from "@focus4/layout";

import {Header} from "./header";

export function Home() {
    return (
        <>
            <Header />
            <Content>
                Bienvenue sur le starter kit de Focus v4 !<br />
                <br />
                Vous serez sûrement intéressés par les liens suivants :
                <ul>
                    <li>
                        <a href="https://klee-contrib.github.io/focus4">Documentation Focus</a>
                    </li>
                    <li>
                        <a href="https://github.com/klee-contrib/focus4">GitHub Focus</a>
                    </li>
                    <li>
                        <a href="https://github.com/klee-contrib/focus4-starter-kit">GitHub Starter Kit</a>
                    </li>
                </ul>
            </Content>
        </>
    );
}
