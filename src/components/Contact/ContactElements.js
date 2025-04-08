import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin: 5rem 0;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 1rem;

  span {
    font-size: 1rem;
    font-weight: 400;
  }

  @media (min-width: 576px) {
    span {
      font-size: 1.25rem;
    }
  }
  @media (min-width: 992px) {
    span {
      font-size: 1.5rem;
    }
  }

  .btn {
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin-top: 10px;
  }

  .PrimaryBtn {
    background-color: #ff8c00; /* Orange */
    color: #ffffff; /* Blanc */
  }

  .PrimaryBtn:hover {
    background-color: #e07b00; /* Orange foncé au survol */
  }
`;
