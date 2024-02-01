import styled from 'styled-components';

export const HeaderArea = styled.div`
    position: fixed;
    height: 60px;
    width: 100vw;
    background-color: transparent;

    .container{
        max-width: 1100px;
        margin: auto;
        display: flex;
        align-items: center;
    }

    a{
        text-decoration: none;
    }

    .logo{
        flex: 1;
        display: flex;
        align-items: center;

        img{
            width: 40px;
            height: 40px;
        }
    
    }

    nav{
        padding-top: 10px;
        padding-bottom: 10px;

        ul,li{
            margin: 0;
            padding: 0;
            list-style: none;
        }

        ul{
            display: flex;
            align-items: center;
            height: 40px;
        }

        li{
            margin-left: 15px;
            margin-right: 15px;

            img{
                width: 25px;
                height: 25px;
            }

            a{
                text-decoration: none;
                font-weight: bold;
                font-size: 15px;
                color: #FFF;
            }
        }
    }

    @media (max-width: 600px) {
        &{
            height: auto;
        }

        .container{
            flex-direction: column;
        }
        .logo{
            justify-content: center;
            margin: 20px 0;
        }
        nav ul{
            flex-direction: column;
            height: auto;
        }
        nav li{
            margin: 10px 20px;
        }
    }
    `;

