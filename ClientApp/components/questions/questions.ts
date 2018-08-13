import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface QuestionItem {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  userId: string;
}

@Component
export default class QuestionComponent extends Vue {
  questions: QuestionItem[];

  data() {
    return {
      questions: [],
      newItem: null
    };
  }

  mounted() {
    fetch('/api/question')
      .then(res => res.json() as Promise<QuestionItem[]>)
      .then(data => {
        this.questions = data;
      });
  }
}
