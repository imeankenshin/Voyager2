<script lang="ts">
  export let list:{link:string, title:string}[] = []
  let className:string = ""
  export {className as class}
</script>

<ul class={className + " "}>
  {#each list as i}
    <li><a href={i.link} class="hover:text-red-500 focus:text-red-500 transition-all mx-3 font-marker text-lg">{i.title}</a></li>
  {/each}
</ul>