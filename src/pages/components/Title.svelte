<script lang="ts">
  export let label:string = "";
</script>

{#each label.split("") as letter}
  <span>{letter}</span>
{/each}
