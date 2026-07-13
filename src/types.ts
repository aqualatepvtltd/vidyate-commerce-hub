/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CertificationCourse {
  id: string;
  name: string;
  description: string;
  courseType: 'basic' | 'advance' | 'premium';
  materialLink: string;
  testLink: string;
  quiz?: boolean;
}
