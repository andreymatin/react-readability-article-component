import styled from 'styled-components';

export const ReadabilityBox = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  background: rgba(255,255,255,.5);

  border: 1px dashed #000;

  ul {
    margin-top: 20px;

    li {
      font-size: 18px;
      line-height: 18px;
      padding: 0 0 10px;
      list-style: none;
    }
  }

  .config-panel {
    display: none;

    ul {
      margin: 0;
      padding: 20px 0;
    }
  }

  .active {
    display: block;
  }

  .btn-config-toggle {
    background: transparent url('../images/config.png') no-repeat;
    width: 32px;
    height: 32px;
    border: 0;
    padding: 0;
    cursor: pointer;
  }

  .btn-config {
    font-family: $font-stack;
    font-size: 18px;
    border: 0;
    background: transparent;
    cursor: pointer;
    display: block;
    padding: 0 20px;
    position: relative;

    &.active:before {
      content: '✔';
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`;
