import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from "./GlobalStyle";

const Login = lazy(() => import('./pages/Login'));
const FileList = lazy(() => import('./FileList')); ;
const Testpage = lazy(() => import('./pages/Testpage'));
const Testform = lazy(() => import('./pages/Testform'));
const Main = lazy(() => import('./pages/Main'));
const Join = lazy(() => import('./pages/Join'));
const FindIdPassword = lazy(() => import('./pages/FindIdPassword'));
const ConsultingSchedule = lazy(() => import('./pages/consultingApply/ConsultingSchedule'));
const ApplyMain = lazy(() => import('./pages/consultingApply/ApplyMain'));
const ApplyWrite = lazy(() => import('./pages/consultingApply/ApplyWrite'));
const ApplyComp = lazy(() => import('./pages/consultingApply/ApplyComp'));
const ReportMain = lazy(() => import('./pages/consultingApply/ReportMain'));
const ReportWrite1 = lazy(() => import('./pages/consultingApply/ReportWrite1'));
const ReportWrite2 = lazy(() => import('./pages/consultingApply/ReportWrite2'));
const ReportWrite3 = lazy(() => import('./pages/consultingApply/ReportWrite3'));
const ChooseSchoolBoard = lazy(() => import('./pages/consultingApply/ChooseSchoolBoard'));
const PreConference = lazy(() => import('./pages/consultingSpace/PreConference'));
const NowConsulting = lazy(() => import('./pages/consultingSpace/NowConsulting'));
const ConsultingSpageQnaBoard = lazy(() => import('./pages/consultingSpace/QnaBoard'));
const ConsultingBoard = lazy(() => import('./pages/reference/ConsultingBoard'));
const ConsultingView = lazy(() => import('./pages/reference/ConsultingView'));
const StudentBoard = lazy(() => import('./pages/reference/StudentBoard'));
const NoticeBoard = lazy(() => import('./pages/consultingCenter/NoticeBoard'));
const NoticeView = lazy(() => import('./pages/consultingCenter/NoticeView'));
const FaqBoard = lazy(() => import('./pages/consultingCenter/FaqBoard'));
const FaqView = lazy(() => import('./pages/consultingCenter/FaqView'));
const ConsultingCenterQnaBoard = lazy(() => import('./pages/consultingCenter/QnaBoard'));
const ConsultingCenterQnaView = lazy(() => import('./pages/consultingCenter/QnaView'));
const MySchedule = lazy(() => import('./pages/mypage/MySchedule'));
const MyFaq = lazy(() => import('./pages/mypage/MyFaq'));
const ReceiveNote = lazy(() => import('./pages/mypage/ReceiveNote'));
const MyInfo = lazy(() => import('./pages/mypage/MyInfo'));
const AdminNote = lazy(() => import('./pages/mypage/AdminNote'));




function App() {
   return (
      <>
         <GlobalStyle />
         <BrowserRouter>
            <Suspense fallback={null}>
               <Routes>
                  <Route path="/file-list" element={<FileList />} />
                  <Route path='/testpage' element={<Testpage />} />
                  <Route path='/testform' element={<Testform />} />

                  {/* 전역 */}
                  <Route path='/login' element={<Login />} />
                  <Route path='/Join' element={<Join />} />
                  <Route path='/find-id-password' element={<FindIdPassword />} />
                  

                  {/* 메인 */}
                  <Route path='/' element={<Main />} />


                  {/* 컨설팅 신청 및 보고 */}
                  <Route path='/consulting-apply/consulting-schedule' element={<ConsultingSchedule />} />
                  <Route path='/consulting-apply/apply-main' element={<ApplyMain />} />
                  <Route path='/consulting-apply/apply-write' element={<ApplyWrite />} />
                  <Route path='/consulting-apply/apply-comp' element={<ApplyComp />} />
                  <Route path='/consulting-apply/report-main' element={<ReportMain />} />
                  <Route path='/consulting-apply/report-wirte1' element={<ReportWrite1 />} />
                  <Route path='/consulting-apply/report-wirte2' element={<ReportWrite2 />} />
                  <Route path='/consulting-apply/report-wirte3' element={<ReportWrite3 />} />
                  <Route path='/consulting-apply/choose-school-board' element={<ChooseSchoolBoard />} />


                  {/* 컨설팅 공간 */}
                  <Route path='/consulting-space/pre-conference' element={<PreConference />} />
                  <Route path='/consulting-space/now-consulting' element={<NowConsulting />} />
                  <Route path='/consulting-space/qna-board' element={<ConsultingSpageQnaBoard />} />


                  {/* 참고자료 */}
                  <Route path='/reference/consulting-board' element={<ConsultingBoard />} />
                  <Route path='/reference/consulting-view' element={<ConsultingView />} />
                  <Route path='/reference/student-board' element={<StudentBoard />} />


                  {/* 컨설팅 센터 */}
                  <Route path='/consulting-center/notice-board' element={<NoticeBoard />} />
                  <Route path='/consulting-center/notice-view' element={<NoticeView />} />
                  <Route path='/consulting-center/faq-board' element={<FaqBoard />} />
                  <Route path='/consulting-center/faq-view' element={<FaqView />} />
                  <Route path='/consulting-center/qna-board' element={<ConsultingCenterQnaBoard />} />
                  <Route path='/consulting-center/qna-view' element={<ConsultingCenterQnaView />} />


                  {/* 마이페이지 */}
                  <Route path='/mypage/my-schedule' element={<MySchedule />} />
                  <Route path='/mypage/my-faq' element={<MyFaq />} />
                  <Route path='/mypage/receive-note' element={<ReceiveNote />} />
                  <Route path='/mypage/my-info' element={<MyInfo />} />
                  <Route path='/mypage/admin-note' element={<AdminNote />} />

               </Routes>
            </Suspense>
         </BrowserRouter>
      </>
   );
}

export default App;
