<template>
  <div>
    <div>
      <div class="b">
        <span class="icn" @click="showClimbers = !showClimbers">
          Climber Select
          <i
            :class="{
              fas: true,
              'fa-angle-down': !showClimbers,
              'fa-angle-up': showClimbers,
            }"
          ></i>
        </span>
      </div>
    </div>
    <div v-show="showClimbers" class="flex-row">
      <ul style="list-style-type: none;">
        <li
          class="icn"
          @click="navigate(climber.sandboxId)"
          v-for="climber in importedClimbers"
          :key="climber.id"
        >
          {{ climber.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    baseURL: String,
  },
  data() {
    return {
      showClimbers: false,
      importedClimbers: [
        { name: "David Vasko", sandboxId: "david-vasko" },
        {
          name: "Chase Yamashiro",
          sandboxId: "shirley-girth",
        },
        { name: "Winifred Affleman", sandboxId: "winifred-affleman" },
        { name: "Akhil Mauze", sandboxId: "l-i-b" },
        { name: "Scott Baron", sandboxId: "dirk-irector" },
        { name: "Jacquie Nguyen", sandboxId: "natalie-udelarms" },
        { name: "Dustin Goldbarg", sandboxId: "scooter-limb" },
        {
          name: "Nathaniel Cushing-Murray",
          sandboxId: "chris-rush",
        },
        { name: "Drew Gomberg", sandboxId: "chris-hoss-99e8l" },
        {
          name: "Daniel Fineman",
          sandboxId: "zev-fineman",
        },
        { name: "Daniel Fong", sandboxId: "fanny-dong" },
        { name: "Kody Shutt", sandboxId: "kody-shutt" },
      ],
    };
  },
  methods: {
    navigate(sandboxId) {
      if (this.sandboxId != sandboxId) {
        this.$router.push(this.baseURL + sandboxId);
      }
    },
  },
};
</script>
