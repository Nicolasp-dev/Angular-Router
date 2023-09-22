import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot
} from "@angular/router";
import { LessonDetail } from "../model/lesson-detail";
import { CoursesService } from "./courses.service";


export const LessonDetailResolver: ResolveFn<LessonDetail> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const courseUrl = route.parent.paramMap.get("courseUrl");
  const lessonSeqNo = route.paramMap.get("lessonSeqNo");

  return inject(CoursesService).loadLessonDetail(courseUrl, lessonSeqNo);
};
