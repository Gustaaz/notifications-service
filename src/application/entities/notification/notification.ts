import { Replace } from 'src/helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'node:crypto';

export interface NotificationProps {
  content: Content;
  category: string;
  recipientId: string;
  readAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<NotificationProps, { createdAt?: Date; updatedAt?: Date }>,
  ) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  get id(): string {
    return this._id;
  }

  get content(): Content {
    return this.props.content;
  }

  set content(value: Content) {
    this.props.content = value;
  }

  get category(): string {
    return this.props.category;
  }

  set category(value: string) {
    this.props.category = value;
  }

  get recipientId(): string {
    return this.props.recipientId;
  }

  set recipientId(value: string) {
    this.props.recipientId = value;
  }

  get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  set readAt(value: Date | null | undefined) {
    this.props.readAt = value;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  set updatedAt(value: Date) {
    this.props.updatedAt = value;
  }
}
