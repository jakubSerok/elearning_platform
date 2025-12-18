import {
  integer,
  json,
  jsonb,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  points: integer().default(0),
  subscription: varchar(),
});

export const CoursesTable = pgTable("courses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: integer().notNull().unique(),
  title: varchar().notNull(),
  desc: varchar().notNull(),
  bannerImage: varchar().notNull(),
  level: varchar().default("Beginner"),
  tags: varchar(),
});

export const CourseChaptersTable = pgTable("course_chapters", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  chapterId: integer(),
  courseId: integer().notNull(),
  name: varchar().notNull(),
  desc: varchar().notNull(),
  exercises: json(),
});

export const EnrolledCourse = pgTable("enrolledCourse", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: integer().notNull(),
  userId: varchar(),
  enrolledDate: timestamp().defaultNow(),
  xpEarned: integer(),
});

export const CompleteExercisesTable = pgTable("completedExercise", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: integer().notNull(),
  chapterId: integer().notNull(),
  exerciseId: integer().notNull(),
  userId: varchar(),
});

export const ExerciseTable = pgTable("exercise", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: integer().notNull(),
  chapterId: integer().notNull(),
  exerciseId: varchar().notNull(),
  exercisesContent: json(),
  exerciseName: varchar(),
});
