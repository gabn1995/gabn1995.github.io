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