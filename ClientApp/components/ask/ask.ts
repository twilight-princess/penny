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
export default class AskComponent extends Vue {
  newItem: QuestionItem;

  data() {
    return {
      newItem: {}
    }
  }

  addItem (e:any) {
    e.preventDefault();
    fetch('/api/question', {method: 'post', 
    body: JSON.stringify(this.newItem), 
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })})
    .then(res => { 
      res.json() as Promise<QuestionItem>
    })
    .then(newItem => {
      this.$router.push('/questions')
    })
  }
}