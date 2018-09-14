'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">crm documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-11d8089693f17c847a17f1a8636a5f0d"' : 'data-target="#xs-components-links-module-AppModule-11d8089693f17c847a17f1a8636a5f0d"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-11d8089693f17c847a17f1a8636a5f0d"' : 'id="xs-components-links-module-AppModule-11d8089693f17c847a17f1a8636a5f0d"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-LoginModule-c4171481afc4ab12520973ab1ad0ea6b"' : 'data-target="#xs-components-links-module-LoginModule-c4171481afc4ab12520973ab1ad0ea6b"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-LoginModule-c4171481afc4ab12520973ab1ad0ea6b"' : 'id="xs-components-links-module-LoginModule-c4171481afc4ab12520973ab1ad0ea6b"' }>
                                        <li class="link">
                                            <a href="components/LoginInterfaceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginInterfaceComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/LoginRoutingModule.html" data-type="entity-link">LoginRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/PageNotFoundModule.html" data-type="entity-link">PageNotFoundModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-PageNotFoundModule-cb1f72fa3c576085fcc2c38d45e47185"' : 'data-target="#xs-components-links-module-PageNotFoundModule-cb1f72fa3c576085fcc2c38d45e47185"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-cb1f72fa3c576085fcc2c38d45e47185"' : 'id="xs-components-links-module-PageNotFoundModule-cb1f72fa3c576085fcc2c38d45e47185"' }>
                                        <li class="link">
                                            <a href="components/PagenotfoundInterfaceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PagenotfoundInterfaceComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/PagenotfoundRoutingModule.html" data-type="entity-link">PagenotfoundRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/PrestationRoutingModule.html" data-type="entity-link">PrestationRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/PrestationsModule.html" data-type="entity-link">PrestationsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-PrestationsModule-e819aad0fb7f0ec9bfc0ef7d11341a0b"' : 'data-target="#xs-components-links-module-PrestationsModule-e819aad0fb7f0ec9bfc0ef7d11341a0b"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-PrestationsModule-e819aad0fb7f0ec9bfc0ef7d11341a0b"' : 'id="xs-components-links-module-PrestationsModule-e819aad0fb7f0ec9bfc0ef7d11341a0b"' }>
                                        <li class="link">
                                            <a href="components/PrestationsInterfaceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrestationsInterfaceComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/UserInterfaceModule.html" data-type="entity-link">UserInterfaceModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-UserInterfaceModule-28b6feb80bbca7cc99fd8a9715be8e17"' : 'data-target="#xs-components-links-module-UserInterfaceModule-28b6feb80bbca7cc99fd8a9715be8e17"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-UserInterfaceModule-28b6feb80bbca7cc99fd8a9715be8e17"' : 'id="xs-components-links-module-UserInterfaceModule-28b6feb80bbca7cc99fd8a9715be8e17"' }>
                                        <li class="link">
                                            <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/UserInterfaceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserInterfaceComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
            <li class="chapter">
                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
            </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
