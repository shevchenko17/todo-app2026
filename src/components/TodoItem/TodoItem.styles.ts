import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 12px;
  background-color: ${({ theme }) => theme.container};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease;
  gap: 16px;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
`;

export const CheckboxContainer = styled.div`
  flex-shrink: 0;
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.button};

  &:hover {
    transform: scale(1.1);
  }
`;

export const Content = styled.div<{ $completed: boolean }>`
  flex: 1;
  opacity: ${({ $completed }) => ($completed ? 0.7 : 1)};
`;

export const Text = styled.p`
  margin: 0 0 8px 0;
  font-size: 16px;
  line-height: 1.5;
  word-break: break-word;
  color: ${({ theme }) => theme.text};
`;

export const Date = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.completed};
  display: block;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BaseButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    flex: 1;
    justify-content: center;
  }
`;

export const EditButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.editButton};
  color: white;

  &:hover {
    background-color: ${({ theme }) => theme.editButton}dd;
  }
`;

export const DeleteButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.deleteButton};
  color: white;

  &:hover {
    background-color: ${({ theme }) => theme.deleteButton}dd;
  }
`;

export const EditIcon = styled.span`
  font-size: 14px;
`;

export const DeleteIcon = styled.span`
  font-size: 14px;
`;