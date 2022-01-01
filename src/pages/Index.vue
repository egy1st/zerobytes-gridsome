<template>
  <Layout>
  
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        
        

        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">Let's professionalize your Knowledge</span>
              {{ ' ' }}
              <span class="block text-indigo-600 xl:inline">The Perfect Way</span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              A complete guide that get your feet wet in coding in Python from Zero-Knowledge to as far as you go.
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a href="python" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Python 3.8 
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a href="excel" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
              ميكروسوفت اكسيل 2016
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://cdn.zerobytes.one/images/coding-in-python.jpg" alt="" />
    </div>
  </div>



    <div class="pt-8 md:pt-16">
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center mb-2 text-ui-primary">
          <Logo :width="80" />
          <h2 class="text-3xl text-6xl font-black tracking-tighter border-none">
            زيروبايتس
          </h2>
        </div>
        <h1 class="text-4xl text-center lg:text-5xl">
          متعة التعلم المجانى و جودة التعليم الاحترافى
        </h1>
        <p class="text-xl font-medium text-center">
          لنتعلم تحليل البيانات من خلال Microst Excel, Microsoft Access, Power BI, Tableau and Python
          <br>
          <strong class="text-ui-primary">فاضى شوية طب يلا نبدأ</strong>
        </p>

        <div class="py-4">
          <code class="block px-4 py-1 select-all bg-ui-border text-ui-typo">go->to https://zerobytes,one/excel to->learn Excel 2016</code>
        </div>

        <div class="flex justify-center mt-8">
          <g-link
            to="/excel/"
            class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
          >
            ابدأ الآن
            <ArrowRightCircleIcon class="ml-4" size="1x" />
          </g-link>
        </div>

        <p class="mt-8 text-center">
          أكثر من 3000 متدرب يشاركوننا متعة التعلم المجانى <span class="border-b border-dashed border-ui-primary text-ui-primary">لتكن أنت التالى</span>.
        </p>

      </div>

      <div class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"></div>

      <div class="flex flex-wrap justify-center -mx-4">
        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <ZapIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            نحن نستمع
          </h3>
          <p class="text-lg text-right">
            نحن نستمع لأرائكم و مقترحاتكم من أجل تحسين جودة الكورسات و الارتقاء بمستوى المتدربين من أجل خلق فرص عمل حقيقة لهم فى سوق العمل <span class="border-b border-dashed border-ui-primary text-ui-primary">فور تعلمهم</span>.
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <SearchIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            تعليم احترافى
          </h3>
          <p class="text-lg text-right">
             فى زيروبايتس لا تأتى مجانية الكورسات نهائياً على حساب جودتها فنحن نحب ما نعمل و نستمتع بالقيام به و لذا فاننا <span class="border-b border-dashed border-ui-primary text-ui-primary">نؤديه على خير وجه</span>.
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <MoonIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            تعليم مجانى
          </h3>
          <p class="text-lg text-rifgt">
            كافة الكورسات الموجودة على موقع زيروبايتس هى كورسات مجانية تماماً و ستظل كذلك. نحن نحمل رسالة نحو زيادة شريحة محترفى تحليل البيانات فى العالم العربى <span class="border-b border-dashed border-ui-primary text-ui-primary">و سندافع عن رسالتنا</span>
          </p>

        

        
		
        </div>
		
		
		<h1 class="text-4xl text-center lg:text-5xl">Contact us</h1>
		
		<span class="block text-indigo-600 xl:inline"> </span>
		<!-- Tailwind css form component -->
		<form id="contact-form" name="simple-contact-form" accept-charset="utf-8"  class="w-full max-w-lg" action="https://formspree.io/f/mnqlleyl"  method="POST">
		  <div class="flex flex-wrap -mx-3 mb-6">
		    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
		      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
		        First Name
		      </label>
		      <input name="name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
		      <p class="text-red-500 text-xs italic">What can we call you?</p>
		    </div>
		    <div class="w-full md:w-1/2 px-3">
		      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
		        Last Name
		      </label>
		      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
		    </div>
		  </div>
		  <div class="flex flex-wrap -mx-3 mb-6">
		    <div class="w-full px-3">
		      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
		        E-mail
		      </label>
		      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" name="_replyto">
		      <p class="text-gray-600 text-xs italic">Your email will allow us to reply to it</p>
		    </div>
		  </div>
		  <div class="flex flex-wrap -mx-3 mb-6">
		    <div class="w-full px-3">
		      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
		        Message
		      </label>
		      <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
		      <p class="text-gray-600 text-xs italic">You may leave your message here</p>
		    </div>
		  </div>
		  <div class="md:flex md:items-center">
		    <div class="md:w-1/3">
		      <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
		        Send
		      </button>
		    </div>
		    <div class="md:w-2/3"></div>
		  </div>
		
		
		</form>
		
      </div>

      
    </div>
  </Layout>
</template>

<script>
import Logo from '@/components/Logo';
import { ArrowRightCircleIcon, ZapIcon, CodeIcon, MoonIcon, SearchIcon } from 'vue-feather-icons';

export default {
  components: {
    Logo,
    ArrowRightCircleIcon,
    ZapIcon,
    CodeIcon,
    MoonIcon,
    SearchIcon
  },

  metaInfo() {
    const title = 'Zeros are Poweful enough to construct any Byte';
    const description = 'Let\'s play with python to learn and prcatice data analysis, machine leaning and problem solving';

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ]
    }
  }
}
</script>








<style>
.home-links a {
  margin-right: 1rem;
}
</style>
