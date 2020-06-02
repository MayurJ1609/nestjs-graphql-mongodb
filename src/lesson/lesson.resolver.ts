import { LessonType } from './lesson.type';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver(of => LessonType)
export class LessonResolver {
  //query is nothing but a function in graphQL
  @Query(returns => LessonType)
  lessson() {
    return {
      id: 'asdjklajdflkaj',
      name: 'Physics Class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
