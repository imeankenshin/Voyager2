<script lang="ts">
  import Card from "../../../components/Card/Card.svelte";
  export let icon: string | undefined | null = "";
  export let title:string = "";
</script>

<Card class="w-60 h-60 m-2 flex-col hover:-translate-y-2 transition-all duration-300">
  <div class="bg-gray-400 w-full aspect-[4/3] rounded-md">
  {icon}
  </div>
  <p class="font-medium text-xl my-2">{title}</p>
</Card>

