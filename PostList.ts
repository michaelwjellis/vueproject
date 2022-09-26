<script>
import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";

export default {
  components: { Datepicker },
  data() {
    return {
      date: new Date("2021-12-31"),
    };
  },
};
</script>
