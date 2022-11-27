import '../CSS/Styles.css';
import './Layout.css'
import React from 'react';

class Layout extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-light bg-light fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">LAB. ENGENHARIA</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">ATIVIDADES</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                                </li>
                                <li class="mb-1">
                                    <button class="Botao btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse1" aria-expanded="false">
                                        1º Bimestre
                                    </button>
                                    <div class="collapse" id="home-collapse1">
                                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="#" class="link-dark rounded">Adivinhe o número</a></li>
                                            <li><a href="#" class="link-dark rounded">Mostrar Data</a></li>
                                            <li><a href="#" class="link-dark rounded">Hora/Tempo Real</a></li>
                                            <li><a href="#" class="link-dark rounded">Palindromo</a></li>
                                            <li><a href="#" class="link-dark rounded">Lista de Valores</a></li>
                                            <li><a href="#" class="link-dark rounded">Animação de escrita</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="mb-1">
                                    <button class="Botao btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                                        2º Bimestre
                                    </button>
                                    <div class="collapse" id="home-collapse">
                                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="#" class="link-dark rounded">Overview</a></li>
                                            <li><a href="#" class="link-dark rounded">Updates</a></li>
                                            <li><a href="#" class="link-dark rounded">Reports</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Layout;
