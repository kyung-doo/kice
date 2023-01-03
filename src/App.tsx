import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from "./GlobalStyle";
import Login from './pages/Login';
import FileList from './FileList';
import Testpage from './pages/Testpage';
import Main from './pages/Main';
import Join from './pages/Join';
import FindIdPassword from './pages/FindIdPassword';

import ConsultingSchedule from './pages/consultingApply/ConsultingSchedule';
import ApplyMain from './pages/consultingApply/ApplyMain';
import ApplyWrite from './pages/consultingApply/ApplyWrite';
import ApplyComp from './pages/consultingApply/ApplyComp';
import ReportMain from './pages/consultingApply/ReportMain';
import ReportWrite1 from './pages/consultingApply/ReportWrite1';
import ReportWrite3 from './pages/consultingApply/ReportWrite3';
import ReportWrite2 from './pages/consultingApply/ReportWrite2';
import ChooseSchoolBoard from './pages/consultingApply/ChooseSchoolBoard';
import PreConference from './pages/consultingSpace/PreConference';
import NowConsulting from './pages/consultingSpace/NowConsulting';
import ConsultingSpageQnaBoard from './pages/consultingSpace/QnaBoard';
import ConsultingBoard from './pages/reference/ConsultingBoard';
import ConsultingView from './pages/reference/ConsultingView';
import StudentBoard from './pages/reference/StudentBoard';
import NoticeBoard from './pages/consultingCenter/NoticeBoard';
import NoticeView from './pages/consultingCenter/NoticeView';
import FaqBoard from './pages/consultingCenter/FaqBoard';
import FaqView from './pages/consultingCenter/FaqView';
import ConsultingCenterQnaBoard from './pages/consultingCenter/QnaBoard';
import ConsultingCenterQnaView from './pages/consultingCenter/QnaView';
import MySchedule from './pages/mypage/MySchedule';
import MyFaq from './pages/mypage/MyFaq';
import ReceiveNote from './pages/mypage/ReceiveNote';
import MyInfo from './pages/mypage/MyInfo';
import AdminNote from './pages/mypage/AdminNote';




function App() {
   return (
      <>
         <GlobalStyle />
         <BrowserRouter>
            <Routes>
               <Route path="/file-list" element={<FileList />} />
               <Route path='/testpage' element={<Testpage />} />

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
         </BrowserRouter>
      </>
   );
}

export default App;
