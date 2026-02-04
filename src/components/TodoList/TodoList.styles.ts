import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 30px auto;
  padding: 30px;
  background-color: ${({ theme }) => theme.container};
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin: 15px;
    padding: 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

export const Stats = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.completed};
  background-color: ${({ theme }) => theme.input};
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 500;
`;

export const Controls = styled.div`
  margin: 24px 0;
`;

export const SelectGroup = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Select = styled.select`
  padding: 10px 16px;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  cursor: pointer;
  transition: border-color 0.3s ease;
  min-width: 180px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.button};
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${({ theme }) => theme.completed};
  font-size: 16px;
  background-color: ${({ theme }) => theme.input};
  border-radius: 8px;
  margin-top: 24px;
  line-height: 1.6;
`;