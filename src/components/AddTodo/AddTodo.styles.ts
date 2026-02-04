import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input<{ $hasError: boolean }>`
  flex: 1;
  padding: 12px;
  border: 2px solid ${({ theme, $hasError }) => 
    $hasError ? theme.deleteButton : theme.border};
  border-radius: 6px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.button};
  }

  &::placeholder {
    color: ${({ theme }) => theme.completed};
    opacity: 0.7;
  }
`;

export const AddButton = styled.button`
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.button};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.buttonHover};
    transform: translateY(-1px);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.completed};
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.deleteButton};
  font-size: 14px;
  margin-top: 5px;
  padding-left: 5px;
  display: flex;
  align-items: center;
  gap: 5px;

  &::before {
    content: "⚠";
    font-size: 12px;
  }
`;