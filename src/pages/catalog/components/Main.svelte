<script lang="ts">
  import IconCard from "./IconCard.svelte";
  let value = "";
  import { useKonami } from "../../../components/script/useKonami";
</script>

<main>
  <div class="py-24 flex justify-center">
    <label for="search" class="flex items-center w-full max-w-2xl">
      <span class="font-['SF_Pro'] absolute text-lg w-7 h-7 text-center translate-x-4">􀊫</span>
      <input type="text" name="icon-search" bind:value={value} id="search" placeholder="Search icons" autocomplete="off"
      class="w-full outline text-lg bg-transparent outline-gray-400 focus:outline-[3px] focus:outline-sky-400 outline-2 rounded-lg pl-14 px-4 py-3"
      >
    </label>
  </div>
  <div class="py-6 px-2">
    <IconCard title="trashbox" />
  </div>
</main>