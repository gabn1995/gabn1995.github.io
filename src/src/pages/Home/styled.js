import styled from 'styled-components';

export const BackgroundArea = styled.div`
  img{
    height: 100vh;
    width: 100%;
  }

`;

export const DiferencialArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .title{
    margin-top: 50px;
    font-size: 35px;
    font-weight: bold;
  }

  .description{
    max-width: 800px;
    margin-top: 20px;
    color: #999;
    font-size: 16px;
    text-align: center;
  }

  .descriptions{
    width: 1100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
    .item{
      width: 25%;
      text-align: center;
      padding-left: 18px;
      padding-right: 18px;
      margin-top: 50px;
    
      img{
        width: 80px;
        height: 80px;
      }

      .item--title{
        margin-top: 10px;
        color: #000;
        font-weight: bold;
        font-size: 16px;
      }

      .item--description{
        margin-top: 15px;
        color: #999;
        font-size: 13px;
      }
    }
  }
`;

export const ProjectsArea = styled.div`
  background-color: #020200;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title{
    position: relative;
    top: 100px;
    font-size: 35px;
    font-weight: bold;
    color: #fff;
  }

  .subtitle{
    margin-top: 150px;
    font-size: 22px;
    color: #ccc;
  }

  form{
    input{
      flex: 1;
      background: none;
      border: none;
      border-bottom: 1px solid #ccc;
      margin: 0 50px;
      outline: none;
      color: #fff;
      font-size: 15px;
    }

    input::placeholder{
      color: #ccc;
      font-size: 15px;
    }
  }

  form .box-first{
    margin-top: 100px;
    width: 1100px;
    display: flex;
    justify-content: space-around;
  }

  form .box-second{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    span{
      color: #ccc;
      margin-bottom:20px;
    }

    input{
      width: 90%;
    }
  }

    button{
      margin-top: 60px;
      padding: 10px 20px;
      border: 0;
      border-radius: 5px;
      font-weight: bold;
      background-color: #44a04d;
      color: #fff;
      cursor: pointer;
    }
`;