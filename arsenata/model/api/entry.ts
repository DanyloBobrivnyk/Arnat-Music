/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import type { Metric } from './metric';
import type { Note } from './note';

export interface Entry {
  date?: string;
  metric?: Metric;
  note?: Note;
}
