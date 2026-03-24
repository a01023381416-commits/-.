/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion, animate } from "motion/react";
import { 
  Stethoscope, 
  GraduationCap, 
  FileText, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  Target,
  Users,
  BookOpen,
  Hospital,
  Instagram,
  Youtube
} from "lucide-react";

const Header = () => (
  <motion.header 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.8, ease: "circOut" }}
    className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
  >
    <div className="container-custom h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <motion.div 
          whileHover={{ rotate: 15, scale: 1.1 }}
          className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 cursor-pointer"
        >
          <Stethoscope className="text-white w-6 h-6" />
        </motion.div>
        <span className="text-xl font-extrabold tracking-tighter">현직메디</span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        {["컨설팅 소개", "학습 컨설팅", "생기부 관리", "원서 지원", "면접 컨설팅"].map((item, i) => (
          <motion.a 
            key={item} 
            href="#" 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            whileHover={{ y: -2 }}
            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
          >
            {item}
          </motion.a>
        ))}
      </nav>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-dark text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-800 transition-all"
      >
        상담 신청하기
      </motion.button>
    </div>
  </motion.header>
);

const MainHero = () => (
  <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-black">
    {/* Immersive Background */}
    <div className="absolute inset-0 z-0">
      <motion.img 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=2000" 
        alt="Stethoscope Background" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
    </div>
    
    <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-7xl md:text-[11rem] font-bold tracking-tight mb-8 leading-[0.9] uppercase"
        >
          PREMIUM<br />
          MEDICAL CONSULTING
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-sm md:text-lg font-medium tracking-[0.5em] mt-12 mb-20 uppercase"
        >
          현직 전문가가 설계하는 압도적 결과
        </motion.p>

        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
            whileTap={{ scale: 0.95 }}
            className="group bg-white text-black px-10 py-5 rounded-full font-bold text-lg flex items-center gap-4 transition-all shadow-2xl shadow-white/10"
          >
            컨설팅 프로그램 보기 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-xl text-white border border-white/30 px-10 py-5 rounded-full font-bold text-lg flex items-center gap-4 transition-all"
          >
            카카오톡 실시간 문의 <MessageSquare className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>

    {/* Scroll Indicator */}
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: 2, 
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
    >
      <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent" />
    </motion.div>
  </section>
);

const ExpertIntro = () => (
  <section className="py-24 bg-white border-b border-gray-50">
    <div className="container-custom">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="text-blue-600 font-bold tracking-[0.3em] text-xs uppercase mb-6">Our Experts</div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-tight">
            지원자들의 합격을 위해
          </h2>
        </div>
        <div className="md:max-w-xs text-right">
          <p className="text-gray-500 text-lg font-medium leading-relaxed">
            각 분야 최고의 전문가들이<br />
            당신의 성공을 위해 함께합니다.
          </p>
        </div>
      </div>
    </div>
  </section>
);


const ConsultingAreas = () => (
  <section className="py-24 bg-white">
    <div className="container-custom">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-20"
      >
        <h2 className="text-6xl font-black mb-6">현직메디 컨설팅</h2>
        <p className="text-xl text-gray-500 font-medium">의학적 전문성과 입시 이해도를 모두 갖춘 전국 최고 수준의 프리미엄 메디컬 컨설팅 그룹입니다.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {[
          {
            icon: <GraduationCap className="w-8 h-8" />,
            title: "의대 입시 분야",
            color: "blue",
            items: [
              "의대 재학생 (연세대 / 가톨릭대 / 건국대)",
              "현직 의대 입학사정관 (고려대 / 가톨릭)"
            ],
            footer: "→ 합격자의 '전략' + 평가자 '기준'으로 함께 만드는 입시 전략"
          },
          {
            icon: <Stethoscope className="w-8 h-8" />,
            title: "의료 관련 학과 입시 / 취업 / 의료계 진로 분야",
            color: "emerald",
            items: [
              "현직 치과의사 / 현직 간호사 (Big5, 고려대학교 병원 등)",
              "보건복지부장관상 수상, Apple 근무 경험 멘토"
            ],
            footer: "→ 대형병원·대학병원·전문성을 모두 갖춘 멘토진"
          }
        ].map((area, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-[60px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all"
          >
            <div className={`w-16 h-16 bg-${area.color}-50 text-${area.color}-600 rounded-[24px] flex items-center justify-center mb-10`}>
              {area.icon}
            </div>
            <h3 className="text-3xl font-black mb-8">{area.title}</h3>
            <ul className="space-y-6 mb-12">
              {area.items.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-4 text-lg font-bold text-gray-700"
                >
                  <CheckCircle2 className={`w-6 h-6 text-${area.color}-600`} /> {item}
                </motion.li>
              ))}
            </ul>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className={`bg-${area.color}-50 p-6 rounded-3xl text-${area.color}-700 text-lg font-black italic`}
            >
              {area.footer}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);


const IntroSection = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="container-custom text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-primary text-xs font-black tracking-widest uppercase mb-4"
      >
        Introduction
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl font-black mb-24"
      >
        현직메디 컨설팅 소개
      </motion.h2>
      
      <div className="max-w-4xl mx-auto mb-32">
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-400"
          >
            현직메디는
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-6xl font-black leading-tight"
          >
            <span className="text-red-600 border-b-8 border-blue-600 pb-1">의학적 전문성</span>과<br />
            <span className="text-red-600 border-b-8 border-blue-600 pb-1">입시 이해도</span>를
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-4xl font-bold text-gray-400"
          >
            모두 갖춘
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-5xl lg:text-6xl font-black"
          >
            <span className="text-blue-600">전국 최고 수준</span>의<br />
            메디컬 컨설팅 그룹입니다.
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-2xl font-bold text-gray-600 mb-12"
        >
          지원자들의 합격을 위해
        </motion.p>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["현직 치과의사", "의대 재학생들", "현직 의대 입학사정관", "현직 Big5 및 고려대 병원 간호사"].map((tag, i) => (
            <motion.span 
              key={tag} 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + i * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 2 : -2 }}
              className="px-8 py-3 bg-white text-blue-600 rounded-full text-lg font-bold border border-blue-100 shadow-sm cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className="text-3xl font-black text-gray-800"
        >
          <span className="border-b-8 border-blue-600 pb-1">전국 최고 수준의 컨설턴트</span>만 고집합니다.
        </motion.div>
      </div>
    </div>
  </section>
);


const StatsCounterSection = () => {
  const [count, setCount] = useState(1);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (hasStarted) {
      const controls = animate(1, 193, {
        duration: 0.6,
        onUpdate: (value) => setCount(Math.floor(value)),
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [hasStarted]);

  return (
    <section className="py-32 bg-[#0A1128] text-white overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent pointer-events-none" 
      />
      <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-left"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            현직메디와 함께 만든 <br />
            <span className="text-blue-500">압도적인 결과</span>
          </h2>
          <p className="text-sm md:text-base font-bold tracking-[0.4em] opacity-40 uppercase">
            TOTAL SUCCESSFUL CANDIDATES
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          onViewportEnter={() => setHasStarted(true)}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center md:text-right"
        >
          <div className="flex items-end justify-center md:justify-end gap-3">
            <span className="text-[10rem] md:text-[14rem] font-black tracking-tighter leading-none tabular-nums drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              {count}
            </span>
            <span className="text-5xl md:text-7xl font-black text-blue-500 mb-6">명</span>
          </div>
          <p className="text-xl font-bold opacity-50 mt-4 tracking-tight">현직메디를 통한 총 합격자수</p>
        </motion.div>
      </div>
    </section>
  );
};


const ValueCards = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="container-custom">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="bg-gray-50 p-16 rounded-[48px] border border-gray-100 flex flex-col items-center text-center justify-center min-h-[350px]"
        >
          <div className="text-lg text-gray-400 font-medium mb-8">정보는 누구나 줄 수 있습니다.</div>
          <div className="text-4xl font-black leading-tight">
            결과는 아무나<br />만들 수 없습니다.
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="bg-blue-600 p-16 rounded-[48px] shadow-2xl shadow-blue-600/30 flex flex-col items-center text-center justify-center text-white min-h-[350px]"
        >
          <div className="text-lg text-white/70 font-medium mb-8">현직메디는 '정보'만 제공하지 않습니다.</div>
          <div className="text-4xl font-black leading-tight">
            결과를 설계하고,<br />실제로 만들어 냅니다.
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-32 text-center space-y-8"
      >
        <p className="text-4xl font-bold italic text-gray-700">"혼자 준비하는 순간, 방향은 흔들립니다."</p>
        <p className="text-4xl font-black text-blue-600">"현직 전문가와 함께하면 결과는 달라집니다."</p>
      </motion.div>
    </div>
  </section>
);


const ServiceGrid = () => (
  <section className="py-32 bg-[#0a1128] text-white overflow-hidden">
    <div className="container-custom">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight uppercase">전문 컨설팅 서비스</h2>
        <p className="text-xl text-gray-400 font-medium tracking-wide">
          각 분야의 현직 전문가들이 합격의 문을 열어드립니다.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {[
          {
            title: "학습 전략 컨설팅",
            subtitle: "LEARNING STRATEGY",
            desc: "성적은 노력의 문제가 아니라 전략의 문제입니다. 의대 합격자들의 실제 데이터를 기반으로 최적화된 학습 전략을 설계합니다.",
            items: [
              "내신 / 수능 맞춤형 학습 로드맵",
              "과목별 성적 상승 전략 (이해/암기/풀이 구조화)",
              "상위권 진입을 위한 핵심 포인트 집중 설계"
            ],
            footer: {
              point: "의대 합격자 공부 방식 적용",
              result: "최단 기간 성적 상승 구조"
            },
            icon: <BookOpen className="w-8 h-8 text-blue-400" />,
            accent: "bg-blue-600/20"
          },
          {
            title: "학생부 설계 컨설팅",
            subtitle: "STUDENT RECORD",
            desc: "학생부는 단순한 기록이 아닙니다. 현직 입학사정관의 평가 기준을 기반으로 지원자의 학생부를 합격형 구조로 재구성합니다.",
            items: [
              "세특 방향 설정 및 전략적 활동 설계",
              "전공 적합성 기반 스토리라인 구축",
              "활동 → 기록 → 평가 연결 구조 설계"
            ],
            footer: {
              point: "현직 사정관 참여, 평가기준 적용",
              result: "합격형 구조 재구성"
            },
            icon: <FileText className="w-8 h-8 text-blue-300" />,
            accent: "bg-blue-400/20"
          },
          {
            title: "지원 전략 컨설팅",
            subtitle: "APPLICATION STRATEGY",
            desc: "합격은 성적이 아니라 전략에서 결정됩니다. 실제 합격 데이터와 평가 기준을 기반으로 합격 확률을 극대화하는 지원 설계를 제공합니다.",
            items: [
              "지원 가능 대학 및 전형 정밀 분석",
              "안정 / 적정 / 상향 전략 설계",
              "대학별 평가 기준 기반 맞춤 지원"
            ],
            footer: {
              point: "불필요한 리스크 제거",
              result: "데이터 기반 합격 지원"
            },
            icon: <Target className="w-8 h-8 text-green-400" />,
            accent: "bg-green-600/20"
          },
          {
            title: "면접 집중 컨설팅",
            subtitle: "INTERVIEW FOCUS",
            desc: "면접은 지식보다 평가 기준을 아는 사람이 합격합니다. 현직 입학사정관과 의료인이 함께 합격형 답변 구조를 완성합니다.",
            items: [
              "의대 / 치대 / 간호 기출 및 예상 질문 분석",
              "답변 구조 설계 (논리 + 스토리 + 전달력)",
              "실전 모의 면접 및 압박 환경 재현"
            ],
            footer: {
              point: "실제 평가 기준 기반 피드백",
              result: "합격을 만드는 답변"
            },
            icon: <MessageSquare className="w-8 h-8 text-orange-400" />,
            accent: "bg-orange-600/20"
          }
        ].map((service, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.15 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-[#151d36] rounded-[48px] p-12 border border-white/5 hover:border-white/10 transition-all group"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className={`w-16 h-16 ${service.accent} rounded-2xl flex items-center justify-center mb-10`}
            >
              {service.icon}
            </motion.div>
            
            <div className="mb-10">
              <div className="text-blue-400 font-bold text-xs tracking-[0.2em] mb-4 uppercase">{service.subtitle}</div>
              <h3 className="text-4xl font-black mb-6 tracking-tight">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-10 text-lg">
                {service.desc}
              </p>
              
              <ul className="space-y-4">
                {service.items.map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3 text-gray-300 font-medium"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="pt-10 border-t border-white/5 grid grid-cols-2 gap-6">
              <div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">차별화 포인트</div>
                <div className="text-sm font-bold text-gray-200">{service.footer.point}</div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">기대 결과</div>
                <div className="text-sm font-bold text-gray-200">{service.footer.result}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);


const ProcessSection = () => (
  <section className="py-24 bg-gray-50/50 overflow-hidden">
    <div className="container-custom">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24"
      >
        <div>
          <div className="text-blue-600 font-bold tracking-[0.3em] text-xs uppercase mb-6">Target Audience</div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-tight">
            이런 분께 추천합니다
          </h2>
        </div>
        <div className="md:max-w-xs text-right">
          <p className="text-gray-500 text-lg font-medium leading-relaxed">
            현직메디의 전문 컨설팅이<br />
            필요한 분들을 위한 가이드입니다.
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* 의대 입시 Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -10 }}
          className="bg-white p-12 rounded-[60px] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all"
        >
          <div className="flex items-center gap-6 mb-16">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-20 h-20 bg-blue-600 text-white rounded-[24px] flex items-center justify-center shadow-xl shadow-blue-600/20"
            >
              <GraduationCap className="w-10 h-10" />
            </motion.div>
            <h3 className="text-4xl font-black text-gray-900">의대 입시</h3>
          </div>
          <ul className="space-y-10">
            {[
              { emoji: "🚀", text: "중위권에서 상위권으로 도약 희망" },
              { emoji: "🎯", text: "\"어떻게 붙는지\" 정확히 알고 싶은 분" },
              { emoji: "📈", text: "내신/학생부/정시 성적 상승 희망" },
              { emoji: "⚖️", text: "의대 면접/논술/평가 기준 궁금한 분" }
            ].map((item, idx) => (
              <motion.li 
                key={idx} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="flex items-center gap-6"
              >
                <span className="text-3xl">{item.emoji}</span>
                <span className="text-2xl font-bold text-blue-900 bg-blue-50/80 px-4 py-1.5 rounded-xl">
                  {item.text}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* 의료 관련 학과 Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -10 }}
          className="bg-white p-12 rounded-[60px] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all"
        >
          <div className="flex items-center gap-6 mb-16">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="w-20 h-20 bg-blue-500 text-white rounded-[24px] flex items-center justify-center shadow-xl shadow-blue-500/20"
            >
              <Hospital className="w-10 h-10" />
            </motion.div>
            <h3 className="text-4xl font-black text-gray-900">의료 관련 학과 입시 / 취업</h3>
          </div>
          <ul className="space-y-10">
            {[
              { emoji: "🏢", text: "치대, 간호학과 진학 및 취업 준비" },
              { emoji: "❌", text: "서류/면접에서 계속 탈락하는 분" },
              { emoji: "🔍", text: "대형병원 커리어의 현실이 궁금한 분" }
            ].map((item, idx) => (
              <motion.li 
                key={idx} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className="flex items-center gap-6"
              >
                <span className="text-3xl">{item.emoji}</span>
                <span className="text-2xl font-bold text-blue-900 bg-blue-50/80 px-4 py-1.5 rounded-xl">
                  {item.text}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);


const ConsultingProcess = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="container-custom">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="text-blue-600 font-bold tracking-[0.3em] text-xs uppercase mb-6">Our Process</div>
        <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-tight">
          컨설팅 방식
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            num: "1",
            title: "1:1 전담 현직 멘토 배정",
            desc: "분야별 최적의 전문가 매칭",
            icon: <Users className="w-8 h-8" />
          },
          {
            num: "2",
            title: "개인 맞춤 로드맵 설계",
            desc: "현재 상황 분석 및 목표 설정",
            icon: <Target className="w-8 h-8" />
          },
          {
            num: "3",
            title: "실행 점검 + 피드백 반복",
            desc: "지속적인 관리와 습관 교정",
            icon: <Target className="w-8 h-8" />
          },
          {
            num: "4",
            title: "통합 관리 시스템",
            desc: "학습, 서류, 면접, 전략 모두 포함",
            icon: <CheckCircle2 className="w-8 h-8" />
          }
        ].map((step, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ y: -15 }}
            className="relative group bg-white p-10 rounded-[40px] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all overflow-hidden"
          >
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
              className="absolute -right-4 -bottom-8 text-[12rem] font-black text-gray-50 group-hover:text-blue-50 transition-colors select-none"
            >
              {step.num}
            </motion.div>
            
            <div className="relative z-10">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-blue-600/20"
              >
                {step.num === "3" ? (
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                    {step.icon}
                  </motion.div>
                ) : step.icon}
              </motion.div>
              <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-lg font-bold text-gray-400">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);


const CTASection = () => (
  <section className="py-40 bg-blue-600 text-white overflow-hidden relative">
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" 
    />
    <motion.div 
      animate={{ 
        scale: [1.2, 1, 1.2],
        rotate: [0, -90, 0],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -ml-48 -mb-48" 
    />
    
    <div className="container-custom relative z-10 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-6xl lg:text-8xl font-black mb-16 leading-tight"
      >
        혼자 고민하지 마세요.<br />
        현직메디가 함께합니다.
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-3xl text-blue-100 font-bold mb-24"
      >
        당신의 꿈을 현실로 만드는 가장 확실한 방법
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        className="flex flex-wrap justify-center gap-10"
      >
        <motion.button 
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 px-16 py-8 rounded-[32px] font-black text-3xl hover:bg-blue-50 transition-all shadow-2xl"
        >
          상담 신청하기
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white border-4 border-white/30 px-16 py-8 rounded-[32px] font-black text-3xl hover:bg-blue-400 transition-all"
        >
          카카오톡 문의
        </motion.button>
      </motion.div>
    </div>
  </section>
);


const Footer = () => (
  <footer className="bg-gray-950 text-white py-32 border-t border-white/5 overflow-hidden">
    <div className="container-custom">
      <div className="grid lg:grid-cols-2 gap-24 mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 15 }}
              className="w-12 h-12 bg-blue-600 rounded-[16px] flex items-center justify-center"
            >
              <Stethoscope className="w-7 h-7 text-white" />
            </motion.div>
            <span className="text-3xl font-black tracking-tighter">현직메디</span>
          </div>
          <p className="text-gray-500 text-xl font-medium leading-relaxed max-w-lg">
            현직 전문가들이 직접 설계하는 프리미엄 메디컬 컨설팅.<br />
            우리는 단순한 정보를 넘어 결과를 만들어냅니다.
          </p>
          <div className="flex gap-6 mt-12">
            {["Blog", "Instagram", "Youtube"].map((s, idx) => (
              <motion.a 
                key={s} 
                href="#" 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                whileHover={{ y: -3, color: "#fff" }}
                className="text-gray-500 font-bold transition-colors"
              >
                {s}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h4 className="font-black text-xl mb-10">컨설팅 서비스</h4>
            <ul className="space-y-6 text-lg text-gray-500 font-bold">
              {["학습 전략 컨설팅", "학생부 설계 컨설팅", "지원 전략 컨설팅", "면접 집중 컨설팅"].map((item, idx) => (
                <motion.li 
                  key={idx} 
                  whileHover={{ x: 5, color: "#3b82f6" }}
                  className="cursor-pointer transition-colors"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h4 className="font-black text-xl mb-10">현직메디 정보</h4>
            <div className="space-y-4 text-gray-500 font-bold">
              <p>대표자명: 최은혜</p>
              <p>사업자번호: 241-15-02729</p>
              <p>hj-medi@naver.com</p>
              <p>서울 성동구 독서당로 270</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-600 font-bold"
      >
        <p>© 2025 현직메디. All rights reserved.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-white transition-colors">이용약관</a>
          <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
        </div>
      </motion.div>
    </div>
  </footer>
);


export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <MainHero />
      <ExpertIntro />
      <StatsCounterSection />
      <IntroSection />
      <ValueCards />
      <ConsultingAreas />
      <ProcessSection />
      <ConsultingProcess />
      <ServiceGrid />
      <CTASection />
      <Footer />
    </div>
  );
}
