import {
    Args,
    ID,
    Query,
    Resolver,
    Mutation,
    Int,
    Parent,
    ResolveField,
  } from '@nestjs/graphql';
  import { Todo } from '../entities/todo.entity';
  import { TodoService } from './todo.service';
  import { CreateTodoInput, UpdateTodoInput } from '../graphql/todo.input';
  
  @Resolver(() => Todo)
  export class TodoResolver {
    constructor(private todoService: TodoService) {}
  
    @Query(() => [Todo], { nullable: 'items' })
    todoFindAll() {
      return this.todoService.findAll();
    }
  
    @Query(() => Todo)
    todoFindOneById(@Args('id', { type: () => Int }) id: number) {
      return this.todoService.findOneById(id);
    }
  
    @Mutation(() => Todo)
    createTodo(@Args('todo') todo: CreateTodoInput) {
      return this.todoService.create(todo);
    }
  
    @Mutation(() => Todo)
    updateTodo(@Args('id', { type: () => Int }) id: number, @Args('todo') todo: UpdateTodoInput) {
      return this.todoService.update(id, todo);
    }
  
    @Mutation(() => Todo)
    deleteTodo(@Args('id', { type: () => Int }) id: number) {
      return this.todoService.delete(id);
    }
  }
  