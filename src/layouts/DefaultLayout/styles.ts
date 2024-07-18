import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`

export const ContainerWrapper = styled.section`
  margin: auto 2rem auto 0;
  padding: 0 1rem 0 0;
  height: 100%;

  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  align-items: flex-start;
`