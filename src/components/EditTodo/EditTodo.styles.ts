import styled from 'styled-components';

export const EditForm = styled.form`
  width: 100%;
  margin: 10px 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const EditInput = styled.input<{ $hasError: boolean }>`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid ${({ theme, $hasError }) => 
    $hasError ? theme.deleteButton : theme.border};
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};
  transition: all 0.2s ease;
  min-width: 0; /* Для корректного сжатия в flex-контейнере */

  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) => 
      $hasError ? theme.deleteButton : theme.editButton};
    box-shadow: 0 0 0 3px ${({ theme, $hasError }) => 
      $hasError ? `${theme.deleteButton}40` : `${theme.editButton}40`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.completed};
    opacity: 0.7;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.border};
    cursor: not-allowed;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 120px;
  height: 48px; /* Высота равна высоте input */

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    flex: 1;
    min-width: auto;
    height: 44px;
  }
`;

export const SaveButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.button};
  color: white;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.buttonHover};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.button}40`};
  }
`;

export const CancelButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.deleteButton};
  color: white;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.deleteButton}dd;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.deleteButton}40`};
  }
`;

export const SaveIcon = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const CancelIcon = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.deleteButton};
  font-size: 14px;
  margin-top: 6px;
  margin-bottom: 4px;
  padding-left: 4px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: "⚠";
    font-size: 12px;
  }
`;

export const CharCount = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.completed};
  text-align: right;
  margin-top: 4px;
  padding-right: 4px;
  font-weight: 400;
  opacity: 0.8;

  @media (max-width: 768px) {
    text-align: left;
  }
`;