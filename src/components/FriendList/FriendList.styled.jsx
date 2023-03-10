import styled from 'styled-components';

export const StatsEl = styled.li`
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  padding: 10px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
