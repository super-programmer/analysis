import http from '@/http'
function getStudentPreview (lessonId) {
  return http.axiosRequest({url: '/diag/preview/lessons/' + lessonId + '/mine'})
}

function getTeacherUserPreview (lessonId, userId) {
  return http.axiosRequest({url: '/diag/preview/lessons/' + lessonId + '/users/' + userId})
}
function getTeacherClassPreview (lessonId) {
  return http.axiosRequest({url: '/diag/preview/lessons/' + lessonId + '/klass'})
}

function getTaskAnalyse (taskId) {
  return http.axiosRequest({url: '/work/home/tasks/' + taskId + '/watch'})
}
export default{
  getStudentPreview,
  getTeacherUserPreview,
  getTeacherClassPreview,
  getTaskAnalyse
}
