
export type MessageRole = 'user' | 'assistant';

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

export interface LeadInfo {
  fullName: string;
  consultationReason: string;
  phone: string;
}

export interface Treatment {
  name: string;
  description: string;
  price: string;
}
