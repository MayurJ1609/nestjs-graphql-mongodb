import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Lesson')
export class LessonType {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDte: string;

  @Field()
  endDate: string;
}
