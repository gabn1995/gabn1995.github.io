import React from "react";
import {BackgroundArea, DiferencialArea} from './styled';

const Page = () => {
    return (
        <>
            <BackgroundArea>
                <img src="assets/images/image_05.jpg" alt="" />
            </BackgroundArea>
            <DiferencialArea>
                <div className="title">Diferenciais</div>
                <div className="description">Conheça algumas características que estão inclusas de forma GRATUITA em todos sistemas que desenvolvemos.</div>
                <div className="descriptions">
                    <div className="item">
                        <img src="assets/icons/responsivo.png" alt="" />
                        <div className="item--title">
                            Responsividade
                        </div>
                        <div className="item--description">
                            Seu sistema apresentável e funcionando nos mais diferentes tamanhos de telas e navegadores.
                        </div>
                    </div>
                    <div className="item">
                        <img src="assets/icons/satisfacao.png" alt="" />
                        <div className="item--title">
                            Satisfação Garantida!
                        </div>
                        <div className="item--description">
                            Oferecemos a GARANTIA de satisfação para nossos clientes. Você receberá exatamente o projeto do contrato com quantas revisões forem necessárias!
                        </div>
                    </div>
                    <div className="item">
                        <img src="assets/icons/seguranca.png" alt="" />
                        <div className="item--title">
                            Segurança em primeiro lugar
                        </div>
                        <div className="item--description">
                            Não se satisfaça com um sistema frágil. Nós protegemos as informações de seus clientes e arquivos de todo seu sistema.
                        </div>
                    </div>
                    <div className="item">
                        <img src="assets/icons/digital.png" alt="" />
                        <div className="item--title">
                            Desenvolvimento sob medida
                        </div>
                        <div className="item--description">
                            Entedemos que cada cliente é único e por isso não compartilhamos recursos entre projetos. Tenha um sistema desenvolvido sob medida para o seu negócio.
                        </div>
                    </div>
                </div>
            </DiferencialArea>
        </>
    );
};

export default Page;